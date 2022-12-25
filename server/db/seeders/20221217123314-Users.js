'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          email: 'serega1997@yandex.ru',
          password: (await bcrypt.hash('666666', 10)),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'grinecz.sergey@yandex.ru',
          password: (await bcrypt.hash('666666', 10)),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {

      });

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
