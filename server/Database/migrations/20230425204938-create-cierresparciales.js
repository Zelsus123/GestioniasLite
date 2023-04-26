'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cierresparciales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATEONLY
      },
      hora: {
        type: Sequelize.TIME
      },
      montototal: {
        type: Sequelize.DECIMAL
      },
      montodolaresefectivo: {
        type: Sequelize.DECIMAL
      },
      montobolivaresefectivo: {
        type: Sequelize.DECIMAL
      },
      otrosmontos: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('cierresparciales');
  }
};