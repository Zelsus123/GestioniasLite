const { CierresTotales, Ingresos, Egresos } = require("../Database/db");
const CierresTotalesController = {};

CierresTotalesController.getAll = async (req, res) => {
  try {
    const cierrestotales = await CierresTotales.findAll({
      include: [
        {
          association: "Ingresos",
        },
        {
          association: "Egresos",
        },
      ],
    });
    res.json(cierrestotales);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CierresTotalesController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const cierretotal = await CierresTotales.findByPk(id, {
      include: [
        {
          association: "Ingresos",
        },
        {
          association: "Egresos",
        },
      ],
    });
    res.json(cierretotal);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CierresTotalesController.createCierreTotal = async (req, res) => {
  try {
    const ingresosSinCierre = await Ingresos.findAll({
      include: [
        {
          association: "CierresTotales",
          where: { ingreso_id: null },
        },
      ],
    });

    const egresosSinCierre = await Egresos.findAll({
      include: [
        {
          association: "EgresosCierres",
          where: { egreso_id: null },
        },
      ],
    });

    const cierreData = {
      fecha: new Date(),
      ingresos: 0,
      egresos: 0,
      total: 0,
    };

    let hasIngresos = false;
    let hasEgresos = false;

    if (ingresosSinCierre.length > 0) {
      hasIngresos = true;
      cierreData.ingresos = ingresosSinCierre.reduce(
        (total, ingreso) => total + ingreso.monto,
        0
      );
    }
    if (egresosSinCierre.length > 0) {
      hasEgresos = true;
      cierreData.egresos = egresosSinCierre.reduce(
        (total, egreso) => total + egreso.monto,
        0
      );
    }

    if (!hasIngresos && !hasEgresos) {
      throw new Error("No hay datos nuevos para realizar un cierre total");
    }

    cierreData.total = cierreData.ingresos - cierreData.egresos;

    const cierretotal = await CierresTotales.create({
      fecha: cierreData.fecha,
      ingresos: cierreData.ingresos,
      egresos: cierreData.egresos,
      total: cierreData.total,
    });

    if (ingresosSinCierre.length > 0) {
      await cierretotal.addIngresos(ingresosSinCierre);
    }
    if (egresosSinCierre.length > 0) {
      await cierretotal.addEgresos(egresosSinCierre);
    }

    res.json("Cierre generado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = CierresTotalesController;
