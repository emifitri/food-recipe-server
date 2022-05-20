'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Recipes', "UserId", { 
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
     });

     await queryInterface.addColumn('Recipes', "CategoryId", { 
      type: Sequelize.INTEGER,
      references: {
        model: "Categories",
        key: "id"
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Recipes', "UserId");
    await queryInterface.removeColumn('Recipes', "CategoryId");
  }
};
