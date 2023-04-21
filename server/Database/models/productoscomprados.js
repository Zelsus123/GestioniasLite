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
      precio: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "productoscomprados",
    }
  );
  return productoscomprados;
};
