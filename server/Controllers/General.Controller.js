const { General } = require("../Database/db");
const GeneralController = {};

GeneralController.getData = async (req, res) => {
  try {
    const Data = await General.findAll();
    if (Data.length === 0) {
      const data = await General.create();
      res.json(data);
    } else {
      const data = await General.findByPk(1);
      res.json(data);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

GeneralController.updateData = async (req, res) => {
  try {
    const { nombre, rif, telefono, direccion, rubro } = req.body;
    const dataGeneral = await General.findByPk(1);
    await dataGeneral.update({ nombre, rif, telefono, direccion, rubro });
    res.json("La informacion ha sido actualizada correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = GeneralController;
