const express = require("express");
const ComprasController = require("../Controllers/compras.controller");
const ComprasRoutes = express.Router();

ComprasRoutes.get("/", ComprasController.getAll);
ComprasRoutes.post("/", ComprasController.createCompra);
ComprasRoutes.get("/:id", ComprasController.getCompraById);
ComprasRoutes.patch("/:id", ComprasController.updateCompra);
ComprasRoutes.delete("/:id", ComprasController.deleteCompra);

module.exports = ComprasRoutes;
