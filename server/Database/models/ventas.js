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
      Ventas.hasMany(models.Devoluciones, {
        as: "Devoluciones",
        foreignKey: "venta_id",
      });
      Ventas.belongsToMany(models.Productos, {
        as: "Productos",
        through: "productosvendidos",
        foreignKey: "venta_id",
      });
      Ventas.belongsTo(models.Cajas, { as: "Caja", foreignKey: "caja_id" });
      Ventas.hasMany(models.Pagos, { as: "Pagos", foreignKey: "venta_id" });
    }
  }
  Ventas.init(
    {
      fecha: DataTypes.DATE,
      montoproductos: DataTypes.DECIMAL,
      iva: DataTypes.DECIMAL,
      montoiva: DataTypes.DECIMAL,
      montototal: DataTypes.DECIMAL,
      descuento: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Ventas",
    }
  );
  return Ventas;
};
