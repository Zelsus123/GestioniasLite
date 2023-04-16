const express = require("express");
const UserController = require("../Controllers/User.Controller");
const UserRoutes = express.Router();

UserRoutes.get("/", UserController.getUsers);
UserRoutes.post("/", UserController.createUser);
UserRoutes.get("/:id", UserController.getUserById);
UserRoutes.patch("/:id", UserController.updateUser);
UserRoutes.delete("/:id", UserController.deleteUser);

module.exports = UserRoutes;
