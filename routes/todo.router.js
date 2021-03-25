const express = require('express');
const router = express.Router()
const {
  getTodo,
  getTodoByID,
  getTodoByUserID,
  addTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller')

router.get('/', getTodo)

router.get('/:id', getTodoByID)

router.get('/user/:user_id', getTodoByUserID)

router.post('/', addTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router