'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {

    static associate({ Comment, Feedback, ValueOfRating, Rating }) {
      this.belongsToMany(Feedback, { through: Comment, foreignKey: 'restaurantId', otherKey: 'feedbackId'})
      this.belongsToMany(ValueOfRating, { through: Rating, foreignKey: 'restaurantId', otherKey: 'valueOfRatingId'})
      // console.log(Model);
    }
  }
  Restaurant.init({
    name: DataTypes.TEXT,
    info: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};
