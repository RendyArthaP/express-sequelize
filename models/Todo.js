const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db')

const Todo = sequelize.define('todo', {
  user_id: DataTypes.INTEGER,
  todo: DataTypes.STRING 
}, {
  underscored: true
})

module.exports = Todo