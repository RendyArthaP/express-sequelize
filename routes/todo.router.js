const express = require('express');
const router = express.Router()
const {
  getTodo,
  getTodoByID,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller')

router.get('/', getTodo)

router.get('/:id', getTodoByID)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router