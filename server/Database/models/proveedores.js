"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Proveedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proveedores.hasMany(models.Compras, {
        as: "Compras",
        foreignKey: "proveedor_id",
      });
    }
  }
  Proveedores.init(
    {
      nombre: DataTypes.STRING,
      rif: DataTypes.STRING,
      telefono: DataTypes.STRING,
      correo: DataTypes.STRING,
      direccion: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Proveedores",
    }
  );
  return Proveedores;
};
