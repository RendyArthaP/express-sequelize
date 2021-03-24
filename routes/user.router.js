const express = require('express');
const router = express.Router()
const {
  getUser,
  getUserByID,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller')

router.get('/', getUser)

router.get('/:id', getUserByID)

router.post('/', addUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router