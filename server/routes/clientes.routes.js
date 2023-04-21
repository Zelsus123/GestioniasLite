const express = require("express");
const ClientesController = require("../Controllers/Clientes.controller");
const ClientesRoutes = express.Router();

ClientesRoutes.get("/", ClientesController.getAll);
ClientesRoutes.get("/:id", ClientesController.getById);
ClientesRoutes.post("/", ClientesController.createCliente);
ClientesRoutes.patch("/:id", ClientesController.updateCliente);
ClientesRoutes.delete("/:id", ClientesController.deleteCliente);

module.exports = ClientesRoutes;
