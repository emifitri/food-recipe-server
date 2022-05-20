'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Recipe, {foreignKey: "UserId"})
      User.hasMany(models.Bookmark, {foreignKey: 'authorId'})
    }
  }
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Username can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Username can not be empty'
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args : true,
          msg: "Email format is not correct"
        },
        notNull: {
          args: true,
          msg: "Email can not be null"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: 'Password at least have 6 characters'
        },
        notNull: {
          args: true,
          msg: 'Password can not be null'
        }
      }
    },
    role: DataTypes.STRING,
    phone: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Phone can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Phone can not be empty'
        }
      }
    },
    address:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args: true,
          msg: 'Address can not be null'
        },
        notEmpty: {
          args: true,
          msg: 'Address can not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};