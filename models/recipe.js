'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.Category, {foreignKey: "CategoryId"})
      Recipe.belongsTo(models.User, {foreignKey: "UserId"})
      Recipe.hasMany(models.Bookmark, {foreignKey: 'recipeId'})
    }
  }
  Recipe.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Title can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Title can not be empty'
        }
      }
    },
    imgUrl: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Image can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Image can not be empty'
        }
      }
    },
    description: {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Description can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Description can not be empty'
        }
      }
    },
    ingredients: {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'ingredients can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'ingredients can not be empty'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};