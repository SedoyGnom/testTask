'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const feedbacks = [
      {
        value: 'хороший ресторан',
      },
      {
        value: 'ну такое'
      },
      {
        value: 'сводил жену и развелся'
      },
      {
        value: 'пришел с женой ушел с двумя'
      },
      {
        value: 'чек как после свадьбы - лучше не смотреть'
      },
      {
        value: ''
      },

    ]

    const feedbackssWithData = feedbacks.map((feedback) => ({
      ...feedback,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('Feedbacks', feedbackssWithData);

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  }
};
