const { Devoluciones, Ventas, Productos } = require("../Database/db");
const DevolucionesController = {};

DevolucionesController.getAll = async (req, res) => {
  try {
    const devoluciones = await Devoluciones.findAll({
      include: {
        association: "DetalleVenta",
        attributes: ["fecha"],
      },
    });
    res.json(devoluciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

DevolucionesController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const devolucion = Devoluciones.findByPk(id, {
      include: [
        {
          association: "DetalleVenta",
          attributes: ["fecha"],
        },
        {
          association: "ProductosDevueltos",
          attributes: ["marca", "producto", "precio_venta"],
        },
      ],
    });
    res.json(devolucion);
  } catch (error) {
    res.json({ message: error.message });
  }
};

DevolucionesController.createDevolucion = async (req, res) => {
  try {
    const { fecha, venta_id, productos } = req.body;
    let totalDevolucion = 0;
    let totalIva = 0;
    let totalProductos = 0;

    // Verificar que la venta existe
    const venta = await Ventas.findByPk(venta_id);
    if (!venta) {
      throw new Error("La venta especificada no existe");
    }

    // Obtener los productos asociados con la venta
    const productosVenta = await venta.getProductos();

    // Verificar que los productos que se están devolviendo estén en la lista de productos de la venta
    const productosInvalidos = productos.filter(
      (producto) =>
        !productosVenta.some(
          (productoVenta) => productoVenta.id === producto.producto_id
        )
    );
    if (productosInvalidos.length > 0) {
      throw new Error(
        `Los siguientes productos no están asociados con la venta especificada: ${productosInvalidos
          .map((producto) => producto.producto_id)
          .join(", ")}`
      );
    }

    // Crear la devolución
    const devolucion = await Devoluciones.create({ fecha });

    for (const producto of productos) {
      const { producto_id, aptoventa, motivo } = producto;
      const productoEncontrado = await Productos.findByPk(producto_id);
      const total = productoEncontrado.precio_venta;

      if (!productoEncontrado) {
        throw new Error("No se ha encontrado dicho producto");
      }

      // Actualizar el stock y las devoluciones del producto
      if (aptoventa) {
        productoEncontrado.stock += 1;
        productoEncontrado.devoluciones += 1;
        await productoEncontrado.save();
      } else {
        productoEncontrado.devoluciones += 1;
        await productoEncontrado.save();
      }

      // Crear el registro de la tabla intermedia
      await devolucion.addProducto(producto_id, {
        through: {
          aptoventa,
          motivo,
          total,
        },
      });

      // Actualizar el total de la devolución
      totalProductos += total;
      totalIva += total * (venta.iva / 100);
      totalDevolucion += totalProductos + totalIva;
    }

    // Actualizar el total de la venta
    venta.montototal -= totalDevolucion;
    venta.montoiva -= totalIva;
    venta.montoproductos -= totalProductos;
    await venta.save();
    await devolucion.update({
      monto_total: totalDevolucion,
      monto_iva: totalIva,
      monto_productos: totalProductos,
    });

    res.json({ message: "Devolución creada exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = DevolucionesController;
