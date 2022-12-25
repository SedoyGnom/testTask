'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, ValueOfRating, Feedback, Rating }) {
      this.belongsToMany(Feedback, { through: Comment, foreignKey: 'userId', otherKey: 'feedbackId' })
      this.belongsToMany(ValueOfRating, { through: Rating, foreignKey: 'userId', otherKey: 'valueOfRatingId' })
    }
  }
  User.init({
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
