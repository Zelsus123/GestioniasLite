"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Devoluciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Devoluciones.belongsToMany(models.Productos, {
        as: "Productos",
        through: "productosdevueltos",
        foreignKey: "producto_id",
      });
      Devoluciones.belongsTo(models.Ventas, {
        as: "DetalleVenta",
        foreignKey: "venta_id",
      });
      Devoluciones.belongsToMany(models.CierresParciales, {
        as: "Cierre",
        through: "cierres_devoluciones",
      });
      Devoluciones.belongsTo(models.Cajas, {
        as: "Cajas",
        foreignKey: "caja_id",
      });
    }
  }
  Devoluciones.init(
    {
      fecha: DataTypes.DATE,
      monto_productos: DataTypes.DECIMAL,
      monto_iva: DataTypes.DECIMAL,
      monto_total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Devoluciones",
    }
  );
  return Devoluciones;
};
