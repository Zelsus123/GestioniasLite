"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Usuario pertenece a un rol
      User.belongsTo(models.Cargos, { as: "cargo", foreignKey: "cargo_id" });
      User.hasMany(models.PagosNomina, { as: "Nomina", foreignKey: "user_id" });
    }
  }
  User.init(
    {
      nombre: DataTypes.STRING,
      edad: DataTypes.INTEGER,
      direccion: DataTypes.TEXT,
      sexo: DataTypes.STRING,
      cedula: DataTypes.STRING,
      salario: DataTypes.DECIMAL,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      telefono: DataTypes.STRING,
      imagen: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
