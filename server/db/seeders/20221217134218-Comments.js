'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert('Comments', [
      {
        restaurantId: 1,
        userId: 1,
        feedbackId: 1
      },
      {
        restaurantId: 2,
        userId: 1,
        feedbackId: 2
      },
      {
        restaurantId: 2,
        userId: 2,
        feedbackId: 3      
      },
      {
        restaurantId: 3,
        userId: 1,
        feedbackId: 4
      },
      {
        restaurantId: 1,
        userId: 2,
        feedbackId: 5
      },
    ],
      {

      }
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Comments', null, {});

  }
};
