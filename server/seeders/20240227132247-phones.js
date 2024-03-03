'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          id: 1,
          model: 'Iphone 11X',
          brand: 'apple',
          date_manufacture: new Date().toISOString(),
          RAMsize: 2048,
          cpu: 'ark',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 2,
          model: 'S21 Ultra',
          brand: 'Samsung',
          date_manufacture: new Date().toISOString(),
          RAMsize: 2048,
          cpu: 'dragon',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
