const express = require('express');
const app = expres()
const port = process.env.port || 3000
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(port, (req, res) => {
  console.log(`Application running at http://localhost:${port}`)
})