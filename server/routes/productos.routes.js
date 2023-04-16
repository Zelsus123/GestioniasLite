const express = require("express");
const ProductosController = require("../Controllers/Productos.controller");
const multer = require("multer");
const MulterProductos = require("../Multer/ProductosImagenes");
const ProductosRoutes = express.Router();

ProductosRoutes.get("/", ProductosController.getProductos);

const upload = multer({ storage: MulterProductos.storage });
ProductosRoutes.post(
  "/",
  upload.array("imagen"),
  ProductosController.createProducto
);

ProductosRoutes.delete("/:id", ProductosController.deleteProductoById);

module.exports = ProductosRoutes;
