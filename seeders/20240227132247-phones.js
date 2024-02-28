'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      'phones',
      [
        {
          model: 'Iphone 11X',
          brand: 'apple',
          date_manufacture: new Date().toISOString(),
          RAMsize: 2048,
          cpu: 'ark',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
