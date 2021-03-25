const Todo = require('../models/Todo');

module.exports = {
  getTodo: async (req, res) => {
    try {
      const todos = await Todo.findAll()
      
      res.status(200).json({
        message: "Success Get Todo",
        data: todos
      })
    } catch(error) {
      console.log(error)
    }
  },

  getTodoByID: async (req, res) => {
    try {
      const ids = req.params.id
      const todos = await Todo.findOne({
        where: {id: ids}
      })

      res.status(200).json({
        message: "Success get todo by id",
        data: todos
      })
    } catch(error) {
      console.log(error)
    }
  },

  getTodoByUserID: async (req, res) => {
    try {
      const usersId = req.params.userId
      const todos = await Todo.findOne({
        where: {id: usersId}
      })

      res.status(200).json({
        message: "Get todo by user id success",
        data: todos
      })
    } catch(error) {
      console.log(error)
    }
  },

  addTodo: async (req, res) => {
    try {
      const inputTodo = req.body
      const newTodo = await Todo.create(inputTodo)
    
      res.status(200).json({
        message: "Add todo success",
        data: newTodo
      })
    } catch(error) {
      console.log(error)
    }
  },

  updateTodo: async (req, res) => {
    try {
      const ids = req.params.id
      const inputUpdateTodo = req.body
      const updateDataTodo = await Todo.update(inputUpdateTodo, {
        where: {id: ids}
      })

      res.status(200).json({
        message: "Update todo success",
      })
    } catch(error) {
      console.log(error)
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const ids = req.params.id
      const deleteTodo = await Todo.destroy({
        where: {id: ids}
      })

      res.status(200).json({
        message: "Delete todo success",
        data: Todo
      })
    } catch(error) {
      console.log(error)
    }
  }
}