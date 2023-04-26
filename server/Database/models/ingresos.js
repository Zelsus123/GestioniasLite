'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingresos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ingresos.init({
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ingresos',
  });
  return ingresos;
};