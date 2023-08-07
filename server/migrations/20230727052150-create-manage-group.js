'use strict';

const { toDefaultValue } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ManageGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.DATE
      },
      yes_no_fee_payment: {
        type: Sequelize.STRING, // "y" 또는 "n"으로 저장
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
    await queryInterface.dropTable('ManageGroups');
  }
};