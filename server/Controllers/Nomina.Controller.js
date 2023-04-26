const { PagosNomina, User, Egresos } = require("../Database/db");
const NominaController = {};

NominaController.getAll = async (req, res) => {
  try {
    const pagosNomina = await PagosNomina.findAll({
      include: [
        {
          association: "Empleado",
        },
      ],
    });
    res.json(pagosNomina);
  } catch (error) {
    res.json({ message: error.message });
  }
};

NominaController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const pagoNomina = await PagosNomina.findByPk(id, {
      include: [
        {
          association: "Empleado",
        },
      ],
    });
    res.json(pagoNomina);
  } catch (error) {
    res.json({ message: error.message });
  }
};

NominaController.createPagoNomina = async (req, res) => {
  try {
    const { user_id } = req.body;
    const empleado = await User.findByPk(user_id);
    if (!empleado) {
      throw new Error("El usuario especificado no existe");
    }
    const pagoNominaData = {
      user_id: empleado.id,
      fecha: new Date(),
      monto: empleado.salario,
      descripcion: `Pago de nomina del empleado ${empleado.nombre}`,
    };
    const pagoNomina = await PagosNomina.create({
      user_id: pagoNominaData.user_id,
      fecha: pagoNominaData.fecha,
      monto: pagoNominaData.monto,
      descripcion: pagoNominaData.descripcion,
    });

    await Egresos.create({
      fecha: pagoNomina.fecha,
      monto: pagoNomina.monto,
      descripcion: pagoNomina.descripcion,
    });

    res.json("Registro creado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = NominaController;
