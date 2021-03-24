const User = require('../models/User');

module.exports = {
  getUser: async (req, res) => {
    try{
      const users = await User.findAll()

      res.json({
        message: "Success Get data",
        data: users
      })
    } catch(error) {  
      console.log(error)
    }
  },

  getUserByID: async (req, res) => {
    try{
      const ids = req.params.id
      const users = await User.findOne({
        where: {id: ids }
      })

      res.json({
        message: "Sucess get data by id",
        data: users
      })
    } catch(error) {
      console.log(error)
    }
  },

  addUser: async (req,res) => {
    try {
      const inputUser = req.body
      const newUser = await User.create(inputUser)

      res.status(200).json( {
        message: "Add user success",
        data: newUser
      })
    } catch(error) {
      console.log(error)
    }
  },

  updateUser: async (req, res) => {

  },

  deleteUser: async (req, res) => {
    try{
      const ids = req.params.id
      const deleteUser = await User.destroy({
        where: {id: ids}
      })

      res.json({
        message: "Delete user success",
      })
    } catch(error) {
      console.log(error)
    }
  }
}