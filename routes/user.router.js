const express = require('express');
const router = express.Router()
const {
  getUser,
  getUserByID,
  addUser
} = require('../controllers/user.controller')

router.get('/', getUser)

router.get('/:id', getUserByID)

router.post('/', addUser)

module.exports = router