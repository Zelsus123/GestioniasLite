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
    }
  }
  cierresparciales.init(
    {
      fecha: DataTypes.DATEONLY,
      hora: DataTypes.TIME,
      montototal: DataTypes.DECIMAL,
      montodolaresefectivo: DataTypes.DECIMAL,
      montobolivaresefectivo: DataTypes.DECIMAL,
      otrosmontos: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "cierresparciales",
    }
  );
  return cierresparciales;
};
