"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class general extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  general.init(
    {
      nombre: {
        type: DataTypes.STRING,
        defaultValue: "GestioniasLite",
      },
      rif: {
        type: DataTypes.STRING,
        defaultValue: "J-000000000",
      },
      telefono: {
        type: DataTypes.STRING,
        defaultValue: "000000000000",
      },
      direccion: {
        type: DataTypes.STRING,
        defaultValue: "Direccion de la tienda",
      },
      rubro: {
        type: DataTypes.STRING,
        defaultValue: "Ingrese el rubro de la tienda",
      },
    },
    {
      sequelize,
      modelName: "general",
    }
  );
  return general;
};
