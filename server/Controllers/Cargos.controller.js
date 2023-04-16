const { Cargos } = require("../Database/db");

module.exports = {
  async getAll(req, res) {
    try {
      Cargos.findAll({
        include: {
          association: "Integrantes",
          attributes: ["nombre", "cedula", "telefono"],
        },
      }).then((roles) => {
        res.json(roles);
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async createRole(req, res) {
    try {
      await Cargos.create({
        cargo: req.body.cargo,
      });
      res.json("Registro creado satisfactoriamente");
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async getCargoById(req, res) {
    try {
      const cargo = await Cargos.findAll({
        where: { id: req.params.id },
        include: {
          association: "Integrantes",
          attributes: ["nombre", "cedula", "telefono"],
        },
      });
      res.json(cargo);
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async updateCargo(req, res) {
    try {
      await Cargos.update(
        {
          cargo: req.body.cargo,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.json("El registro ha sido modificado exitosamente");
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async deleteCargo(req, res) {
    try {
      await Cargos.destroy({ where: { id: req.params.id } });
      res.json("Registro eliminado correctamente");
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
