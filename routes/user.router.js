const express = require('express');
const router = express.Router()
const {
  getUser,
  getUserByID
} = require('../controllers/user.controller')

router.get('/', getUser)

router.get('/:id', getUserByID)

module.exports = router