const {
  Compras,
  Productos,
  productoscomprados,
  connection,
} = require("../Database/db");

const ComprasController = {};

ComprasController.getAll = async (req, res) => {
  try {
    const compras = await Compras.findAll({
      attributes: ["fecha", "monto"],
      include: [
        {
          association: "Proveedor",
          attributes: ["nombre", "rif"],
        },
        {
          association: "Productos",
          attributes: ["marca", "producto", "precio"],
          through: {
            attributes: ["cantidad", "precio"],
          },
        },
      ],
    });
    res.json(compras);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.createCompra = async (req, res) => {
  try {
    const { proveedor_id, fecha, monto, productos } = req.body;

    //Se crea la compra y se declara en una variable
    const compra = await Compras.create({
      proveedor_id,
      fecha,
      monto,
      productos,
    });

    //Actualizar el stock de los productos

    for (const producto of productos) {
      const { producto_id, cantidad } = producto;

      //Encontrar cada producto en la base de datos
      const productoEncontrado = await Productos.findByPk(producto_id);
      const nuevoStock = productoEncontrado.stock + cantidad;
      await productoEncontrado.update({ stock: nuevoStock });
      const precioTotalCompra = productoEncontrado.precio * cantidad;

      //Crear registros en la tabla intermedia
      await compra.addProducto(productoEncontrado, {
        through: { cantidad: cantidad, precio: precioTotalCompra },
      });
    }
    res.json("La compra ha sido añadida con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.getCompraById = async (req, res) => {
  try {
    const compra = await Compras.findAll({
      where: { id: req.params.id },
      attributes: ["fecha", "monto"],
      include: [
        {
          association: "Proveedor",
          attributes: ["nombre", "rif"],
        },
        {
          association: "Productos",
          attributes: ["marca", "producto", "precio"],
          through: {
            attributes: ["cantidad", "precio"],
          },
        },
      ],
    });
    res.json(compra);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.updateCompra = async (req, res) => {
  const { fecha, proveedor_id, productos } = req.body;
  const { id } = req.params;
  let compra = await Compras.findByPk(id);
  if (!compra) {
    return res.json({ error: `La compra ${id} no existe` });
  }
  try {
    let montoTotal = 0;
    await connection.transaction(async (t) => {
      await compra.update({ fecha, proveedor_id }, { transaction: t });
      if (productos) {
        for (let i = 0; i < productos.length; i++) {
          const { producto_id, cantidad, precio } = productos[i];
          const productoEncontrado = await Productos.findByPk(producto_id, {
            transaction: t,
          });
          if (!productoEncontrado) {
            res.json("No se encontro dicho producto");
          }
          const existente = await productoscomprados.findOne({
            where: {
              producto_id: productoEncontrado.id,
              compra_id: compra.id,
            },
            transaction: t,
          });
          if (existente && existente.cantidad > 0 && cantidad === 0) {
            // Si la cantidad existente es mayor que 0 y la cantidad actualizada es 0,
            // restablecer el stock del producto
            const stockOriginal = productoEncontrado.stock - existente.cantidad;
            await productoEncontrado.update(
              { stock: stockOriginal },
              { transaction: t }
            );
            await existente.destroy({ transaction: t });
          } else if (existente && existente.cantidad > 0) {
            // Actualizar la cantidad existente
            const precioTotalCompra = productoEncontrado.precio * cantidad;
            const stockActualizado =
              productoEncontrado.stock - existente.cantidad + cantidad;
            await existente.update(
              { cantidad, precio: precioTotalCompra },
              { transaction: t }
            );
            await productoEncontrado.update(
              { stock: stockActualizado },
              { transaction: t }
            );
          } else if (cantidad > 0) {
            // Agregar un nuevo registro
            await compra.addProducto(productoEncontrado, {
              through: { cantidad, precio },
              transaction: t,
            });
            await productoEncontrado.update(
              { stock: cantidad },
              { transaction: t }
            );
          }
          montoTotal += precio * cantidad;
        }
        await compra.update({ monto: montoTotal }, { transaction: t });
      }
    });
    res.json({ message: "Productos agregados/modificados correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.deleteCompra = async (req, res) => {
  const { id } = req.params;
  try {
    let compra = await Compras.findByPk(id);
    if (!compra) {
      return res.json({ error: `La compra ${id} no existe` });
    }

    const productosOriginales = await compra.getProductos();

    await connection.transaction(async (t) => {
      await compra.setProductos([], { transaction: t });

      for (let i = 0; i < productosOriginales.length; i++) {
        const productoOriginal = productosOriginales[i];
        const cantidadOriginal = productoOriginal.productoscomprados.cantidad;
        const producto = await Productos.findByPk(productoOriginal.id, {
          transaction: t,
        });
        if (!producto) {
          return res.json({
            error: `El producto ${productoOriginal.id} no existe`,
          });
        }
        const nuevoStock = producto.stock - cantidadOriginal;
        await producto.update({ stock: nuevoStock }, { transaction: t });
      }

      await compra.destroy({ transaction: t });
    });

    res.json({ message: "Compra eliminada correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = ComprasController;
