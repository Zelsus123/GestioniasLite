const express = require("express");
const DevolucionesController = require("../Controllers/Devoluciones.Controller");
const DevolucionesRoutes = express.Router();

DevolucionesRoutes.get("/", DevolucionesController.getAll);
DevolucionesRoutes.post("/", DevolucionesController.createDevolucion);
DevolucionesRoutes.get("/:id", DevolucionesController.getById);
DevolucionesRoutes.patch("/:id", DevolucionesController.updateDevolucion);
DevolucionesRoutes.patch("/:id", DevolucionesController.deleteDevolucion);

module.exports = DevolucionesRoutes;
