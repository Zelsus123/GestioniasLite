"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productoscomprados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  productoscomprados.init(
    {
      cantidad: DataTypes.INTEGER,
      precioproducto: DataTypes.DECIMAL,
      totaliva: DataTypes.DECIMAL,
      preciototal: DataTypes.DECIMAL,
      exentoiva: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productoscomprados",
    }
  );
  return productoscomprados;
};
