const { Proveedores } = require("../Database/db");
const ProveedoresController = {};

ProveedoresController.getAll = async (req, res) => {
  try {
    const proveedores = await Proveedores.findAll({
      include: [
        {
          association: "Compras",
          attributes: ["fecha", "monto"],
        },
      ],
    });
    res.json(proveedores);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProveedoresController.createProveedor = async (req, res) => {
  try {
    await Proveedores.create({
      nombre: req.body.nombre,
      rif: req.body.rif,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      correo: req.body.correo,
    });
    res.json("Registro creado exitosamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProveedoresController.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedores.findAll({
      where: { id: req.params.id },
      include: {
        association: "Compras",
        attributes: ["fecha", "monto"],
      },
    });
    res.json(proveedor);
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProveedoresController.deleteProveedor = async (req, res) => {
  try {
    await Proveedores.destroy({
      where: { id: req.params.id },
    });
    res.json("Registro eliminado con exito");
  } catch (error) {
    res.json({ message: error.message });
  }
};

ProveedoresController.updateProveedor = async (req, res) => {
  try {
    let id = req.params.id;
    await Proveedores.update(
      {
        nombre: req.body.nombre,
        rif: req.body.rif,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        correo: req.body.correo,
      },
      {
        where: { id: id },
      }
    );
    res.json(`El proveedor ${id} ha sido modificado con exito`);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = ProveedoresController;
