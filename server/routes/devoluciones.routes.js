const express = require("express");
const DevolucionesController = require("../Controllers/Devoluciones.Controller");
const DevolucionesRoutes = express.Router();

DevolucionesRoutes.get("/", DevolucionesController.getAll);
DevolucionesRoutes.post("/", DevolucionesController.createDevolucion);
DevolucionesRoutes.get("/:id", DevolucionesController.getById);

module.exports = DevolucionesRoutes;
