"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class imagenes_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      imagenes_productos.belongsTo(models.Productos, {
        as: "Producto",
        foreignKey: "producto_id",
      });
    }
  }
  imagenes_productos.init(
    {
      imagen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "imagenes_productos",
    }
  );
  return imagenes_productos;
};
