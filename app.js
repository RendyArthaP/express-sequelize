const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const sequelize = require('./config/db');
const User = require('./models/User');
const Todo = require('./models/Todo');

app.use(express.json())
app.use(routes)
app.use(cors())

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    await Todo.sync({alter: true})
    await User.sync({alter: true})
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()

app.listen(port, (req, res) => {
  console.log(`Application running at http://localhost:${port}`)
})