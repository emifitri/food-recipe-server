'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    let recipes = require('../data/recipes.json').map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()

      return el
    })
    await queryInterface.bulkInsert('Recipes', recipes);
  },

 down:  async  (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Recipes', null);
  }
};