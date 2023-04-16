"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.belongsTo(models.Proveedores, {
        as: "Proveedor",
        foreignKey: "proveedor_id",
      });
      Compras.belongsToMany(models.Productos, {
        through: "productoscomprados",
        as: "Productos",
      });
    }
  }
  Compras.init(
    {
      fecha: DataTypes.DATE,
      monto: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Compras",
    }
  );
  return Compras;
};
