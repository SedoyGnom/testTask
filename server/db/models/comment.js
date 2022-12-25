'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
    }
  }
  Comment.init({
    restaurantId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    feedbackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  });
  return Comment;
};
