const { Egresos } = require("../Database/db");
const EgresosController = {};

EgresosController.getAll = async (req, res) => {
  try {
    const egresos = await Egresos.findAll();
    res.json(egresos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

EgresosController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const egreso = await Egresos.findByPk(id);
    res.json(egreso);
  } catch (error) {
    res.json({ message: error.message });
  }
};

EgresosController.createEgreso = async (req, res) => {
  try {
    const { descripcion, monto } = req.body;
    if (!descripcion || !monto) {
      throw new Error("Debes ingresar monto y descripcion del ingreso");
    }
    const fecha = new Date();
    await Egresos.create({ descripcion, monto, fecha });
    res.json("Ingreso registrado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = EgresosController;
