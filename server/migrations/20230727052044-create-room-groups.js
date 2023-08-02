'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Room_Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      g_user_id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      group_name: {
        type: Sequelize.STRING
      },
      group_goal: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.INTEGER
      },
      fee_day: {
        type: Sequelize.DATE
      },
      max_ppl: {
        type: Sequelize.INTEGER
      },
      group_img: {
        type: Sequelize.BLOB
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
    await queryInterface.dropTable('Room_Groups');
  }
};