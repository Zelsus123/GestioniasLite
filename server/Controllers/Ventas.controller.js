const {
  Productos,
  Ventas,
  productosvendidos,
  Clientes,
  Pagos,
} = require("../Database/db");
const VentasController = {};

VentasController.getAll = async (req, res) => {
  try {
    const ventas = await Ventas.findAll({
      include: [
        {
          association: "Comprador",
          attributes: ["nombre", "cedula"],
        },
        {
          association: "Caja",
          attributes: ["caja"],
        },
      ],
      attributes: ["fecha", "montototal"],
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
          association: "Caja",
          attributes: ["caja"],
        },
        {
          association: "Comprador",
          attributes: ["nombre", "cedula"],
        },
        {
          association: "Productos",
          attributes: ["marca", "producto", "precio"],
          through: {
            attributes: [
              "cantidad",
              "precioproducto",
              "totaliva",
              "preciototal",
              "exentoiva",
            ],
          },
        },
        {
          association: "Pagos",
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
    const { cliente_id, fecha, iva, descuento, caja_id, productos, pagos } =
      req.body;

    // Verificar si el cliente existe en la base de datos
    const cliente = await Clientes.findByPk(cliente_id);
    if (!cliente) {
      // Si el cliente no existe, crear uno nuevo
      const nuevoCliente = await Clientes.create({ id: cliente_id });
      cliente_id = nuevoCliente.id;
    }

    const venta = await Ventas.create({
      cliente_id,
      fecha,
      descuento,
      iva,
      productos,
      caja_id,
    });

    let totalProductos = 0;
    let totalIva = 0;
    let precioTotal = 0;
    let TotalPagado = 0;

    const errores = [];

    for (const pago of pagos) {
      const { monto, metodo_pago_id } = pago;
      const pagorealizado = await Pagos.create({
        monto,
        metodo_pago_id,
        venta_id: venta.id,
      });
      TotalPagado += pagorealizado.monto;
    }

    for (const producto of productos) {
      const { producto_id, cantidad, exentoiva } = producto;
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
        const precioVentaProducto = productoEncontrado.precio_venta * cantidad;
        let totaliva = 0;
        if (exentoiva) {
          totaliva = 0;
        } else {
          totaliva = precioVentaProducto * (venta.iva / 100);
        }
        const preciototal = precioVentaProducto + totaliva;

        // Agregar montos a las variables de totales
        totalProductos += preciototal;
        totalIva += totaliva;

        // Crear registro en la tabla intermedia
        await venta.addProducto(productoEncontrado.id, {
          through: {
            cantidad,
            exentoiva,
            precioproducto: precioVentaProducto,
            totaliva,
            preciototal,
          },
        });
      }
    }

    // Sumar los totales de los productos a los montos de la venta
    precioTotal = totalProductos + totalIva - descuento;

    await venta.update({
      montoproductos: totalProductos,
      iva: iva,
      montoiva: totalIva,
      montototal: precioTotal,
    });

    if (errores.length > 0) {
      res.status(400).json({ errores });
    } else {
      res.status(201).json({ venta });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

VentasController.updateVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente_id, fecha, monto, productos, caja_id } = req.body;

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
    await venta.update({ cliente_id, fecha, monto, caja_id });

    // Actualizar la lista de productos vendidos
    for (const producto of productos) {
      const { producto_id, cantidad, exentoiva } = producto;

      // Buscar el registro de este producto en la tabla intermedia
      const ventaProducto = await ProductosVendidos.findOne({
        where: { venta_id: venta.id, producto_id },
      });

      if (!ventaProducto) {
        // Si no existe, crear un nuevo registro
        if (cantidad > 0) {
          const productoEncontrado = await Productos.findByPk(producto_id);
          if (productoEncontrado) {
            const precioVentaProducto =
              productoEncontrado.precio_venta * cantidad;
            let totaliva = 0;
            if (exentoiva) {
              totaliva = 0;
            } else {
              totaliva = precioVentaProducto * (venta.iva / 100);
            }
            const preciototal = precioVentaProducto + totaliva;

            // Crear registro en la tabla intermedia
            await venta.addProducto(productoEncontrado.id, {
              through: {
                cantidad,
                exentoiva,
                precioproducto: precioVentaProducto,
                totaliva,
                preciototal,
              },
            });
          }
        }
      } else {
        // Si existe, actualizar la cantidad y el total
        if (cantidad > 0) {
          const productoEncontrado = await Productos.findByPk(producto_id);
          if (productoEncontrado) {
            const precioVentaProducto =
              productoEncontrado.precio_venta * cantidad;
            let totaliva = 0;
            if (exentoiva) {
              totaliva = 0;
            } else {
              totaliva = precioVentaProducto * (venta.iva / 100);
            }
            const preciototal = precioVentaProducto + totaliva;
            await ventaProducto.update({
              cantidad,
              exentoiva,
              totaliva,
              precioproducto: precioVentaProducto,
              preciototal,
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
