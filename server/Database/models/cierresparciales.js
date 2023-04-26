"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cierresparciales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cierresparciales.belongsTo(models.Cajas, {
        as: "Caja",
        foreignKey: "caja_id",
      });
      cierresparciales.belongsToMany(models.Ventas, {
        as: "Ventas",
        through: "ventas_cierres_parciales",
      });
      cierresparciales.belongsToMany(models.Devoluciones, {
        as: "Devoluciones",
        through: "cierres_devoluciones",
      });
    }
  }
  cierresparciales.init(
    {
      fecha: DataTypes.DATEONLY,
      hora: DataTypes.TIME,
      montototal: DataTypes.DECIMAL,
      montoproductos: DataTypes.DECIMAL,
      montoiva: DataTypes.DECIMAL,
      devolucionesproductos: DataTypes.DECIMAL,
      devolucionesiva: DataTypes.DECIMAL,
      devolucionestotal: DataTypes.DECIMAL,
      totalcierre: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "cierresparciales",
    }
  );
  return cierresparciales;
};
