const express = require("express");
const CierresController = require("../Controllers/Cierres.controller");
const CierresRoutes = express.Router();

CierresRoutes.get("/", CierresController.getAll);
CierresRoutes.post("/", CierresController.createCierre);
CierresRoutes.get("/:id", CierresController.getById);

module.exports = CierresRoutes;
