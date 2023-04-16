"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cargos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cargos.hasMany(models.User, {
        as: "Integrantes",
        foreignKey: "cargo_id",
      });
    }
  }
  Cargos.init(
    {
      cargo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cargos",
    }
  );
  return Cargos;
};
