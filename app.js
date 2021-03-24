const express = require('express');
const app = express()
const port = process.env.port || 3000
const routes = require('./routes')
const sequelize = require('./config/db');

app.use(express.json())
app.use(routes)

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()

app.listen(port, (req, res) => {
  console.log(`Application running at http://localhost:${port}`)
})