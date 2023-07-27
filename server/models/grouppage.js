'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupPage.init({
    group_id: DataTypes.INTEGER,
    email: DataTypes.INTEGER,
    group_name: DataTypes.STRING,
    group_goal: DataTypes.STRING,
    fee: DataTypes.INTEGER,
    fee_day: DataTypes.DATE,
    max_ppl: DataTypes.INTEGER,
    group_img: DataTypes.BLOB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GroupPage',
  });
  return GroupPage;
};