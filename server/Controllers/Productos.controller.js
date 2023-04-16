const { Productos, imagenes_productos } = require("../Database/db");
const ProductosController = {};

ProductosController.getProductos = async (req, res) => {
  try {
    const productos = await Productos.findAll({
      include: {
        association: "Imagenes",
        attributes: ["imagen"],
      },
    });
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProductosController.createProducto = async (req, res) => {
  try {
    const producto = await Productos.create({
      marca: req.body.marca,
      producto: req.body.producto,
      stock: req.body.stock,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
    });
    const files = req.files;

    for (let i = 0; i < files.length; i++) {
      await imagenes_productos.create({
        imagen: files[i].filename,
        producto_id: producto.id,
      });
    }

    res.json("Producto creado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProductosController.getProductoById = async (req, res) => {
  try {
    const producto = await Productos.findAll({
      where: { id: req.params.id },
    });
    res.json(producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProductosController.deleteProductoById = async (req, res) => {
  try {
    let id = req.params.id;
    await Productos.destroy({ where: { id: id } });
    res.json(`El producto ${id} ha sido eliminado con exito`);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProductosController.updateProducto = async (req, res) => {};

module.exports = ProductosController;
