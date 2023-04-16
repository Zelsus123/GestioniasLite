const express = require("express");
const CargosController = require("../Controllers/Cargos.controller");
const CargosRoutes = express.Router();

CargosRoutes.get("/", CargosController.getAll);
CargosRoutes.post("/", CargosController.createRole);
CargosRoutes.get("/:id", CargosController.getCargoById);
CargosRoutes.patch("/:id", CargosController.updateCargo);
CargosRoutes.delete("/:id", CargosController.deleteCargo);

module.exports = CargosRoutes;
