"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cierrestotales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cierrestotales.belongsToMany(models.Egresos, {
        as: "Egresos",
        through: "egresos_cierre_total",
      });
      cierrestotales.belongsToMany(models.Ingresos, {
        as: "Ingresos",
        through: "ingresos_cierre_total",
      });
    }
  }
  cierrestotales.init(
    {
      fecha: DataTypes.DATEONLY,
      ingresos: DataTypes.DECIMAL,
      egresos: DataTypes.DECIMAL,
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "cierrestotales",
    }
  );
  return cierrestotales;
};
