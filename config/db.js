const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "testing-sequelize",
  dialect: "mysql"
})

module.exports = sequelize