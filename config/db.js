const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "onlineshop2",
  dialect: "mysql"
})

module.exports = sequelize