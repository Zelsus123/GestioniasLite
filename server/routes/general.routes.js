const express = require("express");
const GeneralController = require("../Controllers/General.Controller");
const GeneralRoutes = express.Router();

GeneralRoutes.get("/", GeneralController.getData);
GeneralRoutes.patch("/", GeneralController.updateData);

module.exports = GeneralRoutes;
