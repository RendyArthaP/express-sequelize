const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: "Success"
  })
})

module.exports = router