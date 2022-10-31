'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Boards', [{
        name: 'Finish this app',
         userId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Boards', null, {});
  }
};
