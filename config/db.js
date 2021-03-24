const {Sequelize} = require('sequelize')
require("dotenv").config()

const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  dialect: "mysql"
})

module.exports = sequelize