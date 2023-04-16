"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Ventas, {
        as: "Compras",
        foreignKey: "cliente_id",
      });
    }
  }
  Clientes.init(
    {
      nombre: DataTypes.STRING,
      cedula: DataTypes.STRING,
      direccion: DataTypes.TEXT,
      telefono: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clientes",
    }
  );
  return Clientes;
};
