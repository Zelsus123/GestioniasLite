const express = require("express");
const NominaController = require("../Controllers/Nomina.Controller");
const NominaRouter = express.Router();

NominaRouter.get("/", NominaController.getAll);
NominaRouter.post("/", NominaController.createPagoNomina);
NominaRouter.get("/:id", NominaController.getById);

module.exports = NominaRouter;
