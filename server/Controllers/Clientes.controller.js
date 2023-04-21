const { Clientes } = require("../Database/db");
const ClientesController = {};

ClientesController.getAll = async (req, res) => {
  try {
    const clientes = await Clientes.findAll({
      include: {
        association: "Compras",
        attributes: ["fecha", "monto"],
      },
    });
    res.json(clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ClientesController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Clientes.findByPk(id, {
      include: {
        association: "Compras",
        attributes: ["fecha", "monto"],
      },
    });
    res.json(cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ClientesController.createCliente = async (req, res) => {
  try {
    const { nombre, cedula, direccion, telefono } = req.body;
    await Clientes.create({ nombre, cedula, direccion, telefono });
    res.json("Cliente registrado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ClientesController.updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cedula, direccion, telefono } = req.body;
    const cliente = await Clientes.findByPk(id);
    cliente.update({ nombre, cedula, direccion, telefono });
    res.json("Cliente modificado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ClientesController.deleteCliente = async (req, res) => {
  try {
    await Clientes.destroy({ where: { id: req.params.id } });
    res.json("Cliente eliminado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = ClientesController;
