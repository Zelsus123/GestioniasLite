const { Compras } = require("../Database/db");

const ComprasController = {};

ComprasController.getAll = async (req, res) => {
  try {
    const compras = await Compras.findAll({
      include: [
        {
          association: "Proveedor",
          attributes: ["nombre", "rif"],
        },
      ],
    });
    res.json(compras);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.createCompra = async (req, res) => {
  try {
    await Compras.create({
      fecha: req.body.fecha,
      monto: req.body.monto,
    });
    res.json("Compra registrada exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ComprasController.getCompraById = async (req, res) => {
  try {
    const compra = await Compras.findAll({
      where: { id: req.params.id },
    });
    res.json(compra);
  } catch (error) {
    res.json({ message: error.message });
  }
};
ComprasController.updateCompra = async (req, res) => {
  try {
    await Compras.update(
      {
        fecha: req.body.fecha,
        monto: req.body.monto,
      },
      { where: { id: req.params.id } }
    );
    res.json("el registro se modifico correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};
ComprasController.deleteCompra = async (req, res) => {
  try {
    await Compras.destroy({ where: { id: req.params.id } });
    res.json("El registro ha sido eliminado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = ComprasController;
