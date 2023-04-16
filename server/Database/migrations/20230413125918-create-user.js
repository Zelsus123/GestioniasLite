'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.TEXT
      },
      sexo: {
        type: Sequelize.STRING
      },
      cedula: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.DECIMAL
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};