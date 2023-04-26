const { Ingresos } = require("../Database/db");
const IngresosController = {};

IngresosController.getAll = async (req, res) => {
  try {
    const ingresos = await Ingresos.findAll();
    res.json(ingresos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

IngresosController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const ingreso = await Ingresos.findByPk(id);
    res.json(ingreso);
  } catch (error) {
    res.json({ message: error.message });
  }
};

IngresosController.createIngreso = async (req, res) => {
  try {
    const { descripcion, monto } = req.body;
    if (!descripcion || !monto) {
      throw new Error("Debes ingresar monto y descripcion del ingreso");
    }
    const fecha = new Date();
    await Ingresos.create({ descripcion, monto, fecha });
    res.json("Ingreso registrado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = IngresosController;
