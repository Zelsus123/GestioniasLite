const {
  CierresParciales,
  Ventas,
  Ingresos,
  Devoluciones,
} = require("../Database/db");
const CierresController = {};

CierresController.getAll = async (req, res) => {
  try {
    const cierres = await CierresParciales.findAll({
      include: [
        {
          association: "Ventas",
          attributes: ["fecha", "montototal"],
          include: [
            {
              association: "Pagos",
              attributes: ["metodo", "montos"],
              include: [
                {
                  association: "MetodoPago",
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(cierres);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CierresController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const cierre = CierresParciales.findByPk(id, {
      include: [
        {
          association: "Ventas",
          attributes: ["fecha", "montototal"],
          include: [
            {
              association: "Pagos",
              attributes: ["metodo, montos"],
              include: [
                {
                  association: "MetodoPago",
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(cierre);
  } catch (error) {
    res.json({ message: error.message });
  }
};

CierresController.createCierre = async (req, res) => {
  const { caja_id, fecha, hora } = req.body;
  try {
    // Validar que se proporcionen los datos necesarios
    if (!caja_id || !fecha || !hora) {
      throw new Error("Debe proporcionar la caja, fecha y hora del cierre");
    }

    const ventasSinCierre = await Ventas.findAll({
      include: [
        {
          association: "Cierres",
          where: { venta_id: null },
        },
      ],
      where: { caja_id },
    });

    const devolucionesSinCierre = await Devoluciones.findAll({
      include: [
        {
          association: "Cierre",
          where: { devolucione_id: null },
        },
      ],
      where: { caja_id },
    });

    const cierreData = {
      caja_id,
      fecha,
      hora,
      montototal: 0,
      montoiva: 0,
      montoproductos: 0,
      devolucionesproductos: 0,
      devolucionesiva: 0,
      devolucionestotal: 0,
      totalcierre: 0,
    };
    let hasVentas = false;
    let hasDevoluciones = false;

    if (ventasSinCierre.length > 0) {
      hasVentas = true;
      cierreData.montototal = ventasSinCierre.reduce(
        (total, venta) => total + venta.montototal,
        0
      );
      cierreData.montoiva = ventasSinCierre.reduce(
        (total, venta) => total + venta.montoiva,
        0
      );
      cierreData.montoproductos = ventasSinCierre.reduce(
        (total, venta) => total + venta.montoproductos,
        0
      );
    }

    if (devolucionesSinCierre.length > 0) {
      hasDevoluciones = true;
      cierreData.devolucionesproductos = devolucionesSinCierre.reduce(
        (total, devolucion) => total + devolucion.monto_productos,
        0
      );
      cierreData.devolucionesiva = devolucionesSinCierre.reduce(
        (total, devolucion) => total + devolucion.monto_iva,
        0
      );
      cierreData.devolucionestotal = devolucionesSinCierre.reduce(
        (total, devolucion) => total + devolucion.monto_total,
        0
      );
    }

    cierreData.totalcierre =
      cierreData.montototal - cierreData.devolucionestotal;
    if (!hasVentas && !hasDevoluciones) {
      throw new Error("No hay datos para hacer el cierre");
    }

    const cierre = await CierresParciales.create(cierreData);

    if (ventasSinCierre.length > 0) {
      await cierre.addVentas(ventasSinCierre);
    }
    if (devolucionesSinCierre.length > 0) {
      await cierre.addDevoluciones(devolucionesSinCierre);
    }

    await Ingresos.create({
      descripcion: `Ventas del dia de la caja ${caja_id}`,
      fecha: new Date(),
      monto: cierreData.montototal,
    });

    res.json("Cierre creado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = CierresController;
