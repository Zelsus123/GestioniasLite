"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cajas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cajas.hasMany(models.CierresParciales, {
        as: "Cierres",
        foreignKey: "caja_id",
      });
      cajas.hasMany(models.Ventas, {
        as: "VentasCajas",
        foreignKey: "caja_id",
      });
      cajas.hasMany(models.Devoluciones, {
        as: "Devoluciones",
        foreignKey: "caja_id",
      });
    }
  }
  cajas.init(
    {
      caja: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cajas",
    }
  );
  return cajas;
};
