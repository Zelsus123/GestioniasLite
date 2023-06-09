"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productosvendidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productosvendidos.init(
    {
      cantidad: DataTypes.INTEGER,
      precioproducto: DataTypes.DECIMAL,
      totaliva: DataTypes.DECIMAL,
      preciototal: DataTypes.DECIMAL,
      exentoiva: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productosvendidos",
    }
  );
  return productosvendidos;
};
