const User = require('../models/User');
const Todo = require('../models/User')

module.exports = {
  getUser: async (req, res) => {
    try {
      const users = await User.findAll()

      res.status(200).json({
        message: "Success Get data",
        data: users
      })
    } catch(error) {  
      console.log(error)
    }
  },

  getUserByID: async (req, res) => {
    try {
      const ids = req.params.id
      const users = await User.findOne({
        where: {id: ids }
      })

      res.status(200).json({
        message: "Sucess get data by id",
        data: users
      })
    } catch(error) {
      console.log(error)
    }
  },

  addUser: async (req,res) => {
    try {
      const inputDataUser = req.body
      const newUser = await User.create(inputDataUser)

      res.status(200).json( {
        message: "Add user success",
        data: newUser
      })
    } catch(error) {
      console.log(error)
    }
  },

  updateUser: async (req, res) => {
    try {
      const ids = req.params.id
      const inputUpdateUser = req.body
      const updateDataUser = await User.update(inputUpdateUser, {
        where:{id:ids}
      })

      res.status(200).json({
        message: "Update user success"
      })
    } catch(error) {
      console.log(error)
    }
  },

  deleteUser: async (req, res) => {
    try {
      const ids = req.params.id
      const deleteUser = await User.destroy({
        where: {id: ids}
      })

      res.status(200).json({
        message: "Delete user success",
        data: User
      })
    } catch(error) {
      console.log(error)
    }
  }
}