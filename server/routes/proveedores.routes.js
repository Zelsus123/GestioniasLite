const express = require("express");
const ProveedoresController = require("../Controllers/Proveedores.controller");
const ProveedoresRoutes = express.Router();

ProveedoresRoutes.get("/", ProveedoresController.getAll);
ProveedoresRoutes.post("/", ProveedoresController.createProveedor);
ProveedoresRoutes.get("/:id", ProveedoresController.getProveedorById);
ProveedoresRoutes.patch("/:id", ProveedoresController.updateProveedor);
ProveedoresRoutes.delete("/:id", ProveedoresController.deleteProveedor);

module.exports = ProveedoresRoutes;
