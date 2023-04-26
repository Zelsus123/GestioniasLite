const { MetodosDePago } = require("../Database/db");
const MetodosPagoController = {};

MetodosPagoController.getAll = async (req, res) => {
  try {
    const metodospago = await MetodosDePago.findAll({
      include: [
        {
          association: "pagos",
        },
      ],
    });
    res.json(metodospago);
  } catch (error) {
    res.json({ message: error.message });
  }
};

MetodosPagoController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const metodopago = await MetodosDePago.findByPk(id, {
      include: [
        {
          association: "pagos",
        },
      ],
    });
    if (!metodopago) {
      throw new Error("El metodo de pago no existe");
    }
    res.json(metodopago);
  } catch (error) {
    res.json({ message: error.message });
  }
};

MetodosPagoController.createMetodoPago = async (req, res) => {
  try {
    const { metodo, descripcion } = req.body;
    await MetodosDePago.create({
      metodo,
      descripcion,
    });
    res.json("Metodo de pago creado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

MetodosPagoController.updateMetodoPago = async (req, res) => {
  try {
    const { id } = req.params;
    const { metodo, descripcion } = req.body;
    const metodopago = await MetodosDePago.findByPk(id);
    if (!metodopago) {
      throw new Error("El metodo de pago no existe");
    }
    await metodopago.update({
      metodo,
      descripcion,
    });
    res.json(`El metodo de pago ${id} ha sido actualizado`);
  } catch (error) {
    res.json({ message: error.message });
  }
};

MetodosPagoController.deleteMetodo = async (req, res) => {
  try {
    const { id } = req.params;
    const metodoaeliminar = await MetodosDePago.findByPk(id);
    if (!metodoaeliminar) {
      throw new Error("El metodo a eliminar no existe");
    }
    await metodoaeliminar.destroy();

    res.json("El registro ha sido eliminado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = MetodosPagoController;
