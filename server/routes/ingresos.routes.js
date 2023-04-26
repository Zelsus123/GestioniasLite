const express = require("express");
const IngresosController = require("../Controllers/ingresos.controller");
const IngresosRoutes = express.Router();

IngresosRoutes.get("/", IngresosController.getAll);
IngresosRoutes.post("/", IngresosController.createIngreso);
IngresosRoutes.get("/:id", IngresosController.getById);

module.exports = IngresosRoutes;
