'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {

    static associate({ Comment, Restaurant, Feedback, User }) {
     this.belongsToMany(User, { through: Comment, foreignKey: 'feedbackId', otherKey: 'userId'})
     this.belongsToMany(Restaurant, { through: Comment, foreignKey: 'feedbackId', otherKey: 'restaurantId'})
    }
  }
  Feedback.init({
    value: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
