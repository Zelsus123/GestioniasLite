const express = require("express");
const CajasController = require("../Controllers/Cajas.controller");
const CajasRoutes = express.Router();

CajasRoutes.get("/", CajasController.getAll);
CajasRoutes.post("/", CajasController.createCaja);
CajasRoutes.get("/:id", CajasController.getById);
CajasRoutes.patch("/:id", CajasController.updateCaja);
CajasRoutes.delete("/:id", CajasController.deleteCaja);

module.exports = CajasRoutes;
