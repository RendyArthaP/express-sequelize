const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Todo = require('./Todo')

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING
  },
  email: DataTypes.STRING,
  birth_date: DataTypes.DATE,
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()")
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()")
  }
}, {
  underscored: true,
  timestamps: false
})

User.hasMany(Todo, {
  foreignKey: {
    name: "user_id"
  }
})

Todo.belongsTo(User, {
  foreignKey: {
    name: "user_id"
  }
})

module.exports = User