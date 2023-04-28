"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pagos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pagos.belongsTo(models.MetodosDePago, {
        as: "MetodoPago",
        foreignKey: "metodo_pago_id",
      });
      pagos.belongsTo(models.Ventas, { as: "Venta", foreignKey: "venta_id" });
    }
  }
  pagos.init(
    {
      monto: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "pagos",
    }
  );
  return pagos;
};
