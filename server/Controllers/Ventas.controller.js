const {
  Productos,
  Ventas,
  productosvendidos,
  Clientes,
} = require("../Database/db");
const VentasController = {};

VentasController.getAll = async (req, res) => {
  try {
    const ventas = await Ventas.findAll({
      include: {
        association: "Comprador",
        attributes: ["nombre", "cedula"],
      },
      attributes: ["fecha", "monto"],
    });
    res.json(ventas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

VentasController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await Ventas.findByPk(id, {
      include: [
        {
          association: "Comprador",
          attributes: ["nombre", "cedula"],
        },
        {
          association: "ProductosVenta",
          attributes: ["marca", "producto", "precio"],
          through: {
            attributes: ["cantidad", "total"],
          },
        },
      ],
    });
    res.json(venta);
  } catch (error) {
    res.json({ message: error.message });
  }
};

VentasController.createVenta = async (req, res) => {
  try {
    const { cliente_id, fecha, monto, productos } = req.body;

    // Verificar si el cliente existe en la base de datos
    const cliente = await Clientes.findByPk(cliente_id);
    if (!cliente) {
      // Si el cliente no existe, crear uno nuevo
      const nuevoCliente = await Clientes.create({ id: cliente_id });
      cliente_id = nuevoCliente.id;
    }

    const venta = await Ventas.create({ cliente_id, fecha, monto, productos });

    const errores = [];

    for (const producto of productos) {
      const { producto_id, cantidad } = producto;
      // Conseguir el producto en la base de datos
      const productoEncontrado = await Productos.findByPk(producto_id);
      if (!productoEncontrado) {
        errores.push(`El producto ${producto_id} no existe`);
      } else if (productoEncontrado.stock === 0) {
        errores.push(`El producto ${producto_id} no tiene stock`);
      } else if (productoEncontrado.stock < cantidad) {
        errores.push(
          `El producto ${producto_id} no tiene suficiente stock. Stock actual: ${productoEncontrado.stock}`
        );
      } else {
        // Actualizar stock del producto
        await productoEncontrado.update({
          stock: productoEncontrado.stock - cantidad,
        });
        const precioVentaProducto = productoEncontrado.precio * cantidad;
        // Crear registro en la tabla intermedia
        await Ventas.addProducto(productoEncontrado, {
          through: { cantidad, total: precioVentaProducto },
        });
      }
    }

    if (errores.length > 0) {
      res.status(400).json({ errores });
    } else {
      res.status(201).json({ venta });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al procesar la venta" });
  }
};

VentasController.updateVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente_id, fecha, monto, productos } = req.body;

    // Buscar la venta por su ID
    const venta = await Ventas.findByPk(id);

    if (!venta) {
      return res
        .status(404)
        .json({ message: `La venta con ID ${id} no existe` });
    }

    // Si se está actualizando el cliente, verificar que exista
    if (cliente_id) {
      const cliente = await Clientes.findByPk(cliente_id);
      if (!cliente) {
        return res
          .status(400)
          .json({ message: `El cliente con ID ${cliente_id} no existe` });
      }
    }

    // Actualizar los datos de la venta
    await venta.update({ cliente_id, fecha, monto });

    // Actualizar la lista de productos vendidos
    for (const producto of productos) {
      const { producto_id, cantidad } = producto;

      // Buscar el registro de este producto en la tabla intermedia
      const ventaProducto = await ProductosVendidos.findOne({
        where: { venta_id: venta.id, producto_id },
      });

      if (!ventaProducto) {
        // Si no existe, crear un nuevo registro
        if (cantidad > 0) {
          const productoEncontrado = await Productos.findByPk(producto_id);
          if (productoEncontrado) {
            const precioVentaProducto = productoEncontrado.precio * cantidad;
            await venta.addProducto(productoEncontrado, {
              through: { cantidad, total: precioVentaProducto },
            });
          }
        }
      } else {
        // Si existe, actualizar la cantidad y el total
        if (cantidad > 0) {
          const productoEncontrado = await Productos.findByPk(producto_id);
          if (productoEncontrado) {
            const precioVentaProducto = productoEncontrado.precio * cantidad;
            await ventaProducto.update({
              cantidad,
              total: precioVentaProducto,
            });
          }
        } else {
          // Si la cantidad es 0, eliminar el registro de la tabla intermedia
          await venta.removeProducto(producto_id);
        }
      }

      // Actualizar el stock del producto
      const productoEncontrado = await Productos.findByPk(producto_id);
      if (productoEncontrado) {
        const stockActualizado =
          productoEncontrado.stock + ventaProducto.cantidad - cantidad;
        await productoEncontrado.update({ stock: stockActualizado });
      }
    }

    res.status(200).json({ venta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al modificar la venta" });
  }
};

VentasController.deleteVenta = async (req, res) => {
  try {
    const venta = await Ventas.findByPk(req.params.id, { include: Productos });
    if (!venta) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }

    const productosEliminados = [];

    for (const producto of venta.productos) {
      const productoActualizado = await producto.update({
        stock: producto.stock + producto.productosventas.cantidad,
      });
      productosEliminados.push(productoActualizado);
    }

    await venta.setProductos([]);
    await venta.destroy();

    res.json({
      message: "Venta eliminada correctamente",
      productosEliminados,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la venta" });
  }
};

module.exports = VentasController;
