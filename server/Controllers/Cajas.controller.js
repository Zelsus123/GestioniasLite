const { Cajas } = require("../Database/db");
const CajasController = {};

CajasController.getAll = async (req, res) => {
  try {
    const cajas = await Cajas.findAll({
      include: {
        association: "VentasCajas",
        attributes: ["fecha", "montototal"],
      },
    });
    res.json(cajas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CajasController.getById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const caja = Cajas.findByPk(id, {
      include: {
        association: "VentasCajas",
        attributes: ["fecha", "montototal"],
      },
    });
    res.json(caja);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CajasController.createCaja = async (req, res) => {
  try {
    const { caja } = req.body;
    await Cajas.create({ caja });
    res.json("Caja creada correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

CajasController.updateCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const { caja } = req.body;
    const cajaamodificar = await Cajas.findByPk(id);
    await cajaamodificar.update({ caja });
  } catch (error) {
    res.json({ message: error.message });
  }
};

CajasController.deleteCaja = async (req, res) => {
  try {
    const { id } = req.params;
    const caja = await Cajas.findByPk(id);
    await caja.destroy();
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = CajasController;
