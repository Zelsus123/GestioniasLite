const express = require("express");
const VentasController = require("../Controllers/Ventas.controller");
const VentasRoutes = express.Router();

VentasRoutes.get("/", VentasController.getAll);
VentasRoutes.post("/", VentasController.createVenta);
VentasRoutes.get("/:id", VentasController.getById);
VentasRoutes.patch("/:id", VentasController.updateVenta);
VentasRoutes.delete("/:id", VentasController.deleteVenta);

module.exports = VentasRoutes;
