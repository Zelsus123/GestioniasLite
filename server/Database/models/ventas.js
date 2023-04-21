"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ventas.belongsTo(models.Clientes, {
        as: "Comprador",
        foreignKey: "cliente_id",
      });
      Ventas.belongsToMany(models.Productos, {
        through: "productosvendidos",
        as: "ProductosVenta",
      });
    }
  }
  Ventas.init(
    {
      fecha: DataTypes.DATE,
      monto: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Ventas",
    }
  );
  return Ventas;
};
