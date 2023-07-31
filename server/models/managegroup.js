'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManageGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ManageGroup.init({
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    month: DataTypes.DATE,
    yes_no_fee_payment: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ManageGroup',
  });
  return ManageGroup;
};