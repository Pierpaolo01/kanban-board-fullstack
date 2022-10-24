'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Columns', [{
         name: 'step1',
         BoardId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
     },
     {
         name: 'step2',
         BoardId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
     },
     {
         name: 'step3',
         BoardId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Columns', null, {});
  }
};
