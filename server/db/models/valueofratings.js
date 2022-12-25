'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ValueOfRating extends Model {
    
    static associate({User, Rating}) {
      this.belongsToMany(User, { through: Rating, foreignKey: 'valueOfRatingId', otherKey: 'userId' })
    }
  }
  ValueOfRating.init({
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ValueOfRating',
  });
  return ValueOfRating;
};
