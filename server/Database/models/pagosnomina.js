"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pagosnomina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pagosnomina.belongsTo(models.User, {
        as: "Empleado",
        foreignKey: "user_id",
      });
    }
  }
  pagosnomina.init(
    {
      fecha: DataTypes.DATEONLY,
      monto: DataTypes.DECIMAL,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pagosnomina",
    }
  );
  return pagosnomina;
};
