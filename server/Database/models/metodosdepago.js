"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class metodosdepago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      metodosdepago.hasMany(models.Pagos, {
        as: "metodopago",
        foreignKey: "metodo_pago_id",
      });
    }
  }
  metodosdepago.init(
    {
      metodo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "metodosdepago",
    }
  );
  return metodosdepago;
};
