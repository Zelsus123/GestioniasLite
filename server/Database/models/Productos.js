"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.hasMany(models.imagenes_productos, {
        as: "Imagenes",
        foreignKey: "producto_id",
      });
      Productos.belongsToMany(models.Ventas, {
        through: "productosvendidos",
        as: "Ventas",
      });
      Productos.belongsToMany(models.Compras, {
        through: "productoscomprados",
        as: "Compras",
        foreignKey: "producto_id",
      });
    }
  }
  Productos.init(
    {
      marca: DataTypes.STRING,
      producto: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      precio: DataTypes.DECIMAL,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );
  return Productos;
};
