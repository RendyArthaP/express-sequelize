const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING
  },
  email: DataTypes.STRING,
  birth_date: DataTypes.DATE
})

module.exports = User