'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class egresos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  egresos.init({
    fecha: DataTypes.DATEONLY,
    descripcion: DataTypes.STRING,
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'egresos',
  });
  return egresos;
};