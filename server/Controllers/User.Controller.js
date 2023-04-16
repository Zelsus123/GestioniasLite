const { User } = require("../Database/db");
const UserController = {};

UserController.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        association: "cargo",
        attributes: ["cargo"],
      },
    });
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

UserController.createUser = async (req, res) => {
  try {
    await User.create({
      nombre: req.body.nombre,
      edad: req.body.edad,
      direccion: req.body.direccion,
      sexo: req.body.sexo,
      cedula: req.body.cedula,
      salario: req.body.salario,
      password: req.body.password,
      email: req.body.email,
      telefono: req.body.telefono,
      cargo_id: req.body.cargo_id,
    });
    res.json("Registro creado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

UserController.getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { id: req.params.id },
      include: {
        association: "cargo",
        attributes: ["cargo"],
      },
    });
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

UserController.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.json("Se ha eliminado el registro");
  } catch (error) {
    res.json({ message: error.message });
  }
};

UserController.updateUser = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    res.json("Registro modificado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = UserController;
