'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { Op } = Sequelize;
    queryInterface.addConstraint('phones', {
      fields: ['date_manufacture'],
      type: 'check',
      name: 'date_manufacture_check',
      where: {
        date_manufacture: { [Op.lte]: Sequelize.literal('CURRENT_DATE') },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'date_manufacture_check');
  },
};
