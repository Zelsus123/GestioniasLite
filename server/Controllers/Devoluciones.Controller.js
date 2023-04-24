const {
  Devoluciones,
  ProductosDevueltos,
  Ventas,
  Productos,
} = require("../Database/db");
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
          attributes: ["marca", "producto", "precio"],
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
    const { fecha, productos } = req.body;
    let totalDevolucion = 0;

    // Crear la devolución
    const devolucion = await Devoluciones.create({ fecha });

    for (const producto of productos) {
      const { producto_id, aptoventa, motivo, total } = producto;
      const productoEncontrado = await Productos.findByPk(producto_id);

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
      totalDevolucion += total;
    }

    // Actualizar el total de la venta
    const venta = await Ventas.findByPk(req.params.id);
    venta.total -= totalDevolucion;
    await venta.save();
    await devolucion.update({ monto_total: totalDevolucion });

    res.json({ message: "Devolución creada exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

DevolucionesController.updateDevolucion = async (req, res) => {
  try {
    const devolucion = await Devoluciones.findByPk(req.params.id);
    if (!devolucion) {
      throw new Error("No se ha encontrado dicha devolución");
    }

    const { productosdevueltos } = devolucion;

    for (const producto of productosdevueltos) {
      const { id, cantidad } = producto.productosdevueltos;
      const cantidadDevuelta = req.body.productosdevueltos.find(
        (p) => p.id === id
      ).cantidad;
      if (cantidadDevuelta === 0) {
        // eliminar el producto del array de productos devueltos
        const index = req.body.productosdevueltos.findIndex((p) => p.id === id);
        req.body.productosdevueltos.splice(index, 1);

        // eliminar el registro de la tabla intermedia
        await ProductosDevoluciones.destroy({
          where: { devolucion_id: devolucion.id, producto_id: id },
        });
      } else {
        // actualizar la cantidad devuelta en la tabla intermedia
        await ProductosDevoluciones.update(
          { cantidad: cantidadDevuelta },
          { where: { devolucion_id: devolucion.id, producto_id: id } }
        );

        // actualizar el stock y la cantidad de devoluciones en la tabla Productos
        const productoEncontrado = await Productos.findByPk(id);
        const cantidadAnterior = productoEncontrado.cantidad;
        const cantidadNueva = cantidadAnterior + cantidad - cantidadDevuelta;
        const cantidadDevolucionesAnterior = productoEncontrado.devoluciones;
        const cantidadDevolucionesNueva =
          cantidadDevolucionesAnterior + cantidadDevuelta;
        await productoEncontrado.update({
          cantidad: cantidadNueva,
          devoluciones: cantidadDevolucionesNueva,
        });
      }
    }

    // actualizar el monto total de la devolución
    const montoTotal = req.body.monto_total;
    await devolucion.update({ monto_total: montoTotal });

    res.json({ message: "Devolución actualizada correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

DevolucionesController.deleteDevolucion = async (req, res) => {
  try {
    const devolucion = await Devoluciones.findByPk(req.params.id);

    if (!devolucion) {
      throw new Error("No se encontró la devolución");
    }

    await Promise.all(
      devolucion.productos.map(async (producto) => {
        const productoDevuelto = await ProductosDevueltos.findOne({
          where: { producto_id: producto.id, devolucion_id: devolucion.id },
        });

        if (productoDevuelto) {
          if (productoDevuelto.cantidad > 0) {
            // Restar la cantidad devuelta al stock del producto
            const cantidadDevuelta = productoDevuelto.cantidad;
            producto.stock += cantidadDevuelta;
            await producto.save();

            // Restar el precio de los productos devueltos del total de la venta
            const precioDevuelto = productoDevuelto.total;
            devolucion.monto_total -= precioDevuelto;
            await devolucion.save();
          }

          // Eliminar el registro de la tabla intermedia ProductosDevueltos
          await productoDevuelto.destroy();
        }
      })
    );

    // Eliminar la devolución
    await devolucion.destroy();

    res.json({ message: "Devolución eliminada correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = DevolucionesController;
