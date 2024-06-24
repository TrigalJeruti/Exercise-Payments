'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professional.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    userType: DataTypes.STRING,
    profession: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professional',
  });
  return Professional;
};