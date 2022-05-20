'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    let categories = require('../data/categories.json').map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()

      return el
    })
    await queryInterface.bulkInsert('Categories', categories);
  },

 down:  async  (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Categories', null);
  }
};