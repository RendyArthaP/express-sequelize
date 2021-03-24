const express = require('express');
const router = express.Router()
const userRouter = require('./user.router');

router.get('/', (req, res) => {
  res.json({
    message: "Success"
  })
})

router.use('/user', userRouter)

module.exports = router