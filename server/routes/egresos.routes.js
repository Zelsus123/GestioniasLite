const express = require("express");
const EgresosController = require("../Controllers/egresos.controller");
const EgresosRoutes = express.Router();

EgresosRoutes.get("/", EgresosController.getAll);
EgresosRoutes.post("/", EgresosController.createEgreso);
EgresosRoutes.get("/:id", EgresosController.getById);

module.exports = EgresosRoutes;
