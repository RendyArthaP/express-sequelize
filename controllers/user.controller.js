const User = require('../models/User');

module.exports = {
  getUser: async (req, res) => {
    const users = await User.findAll()

    res.json({
      message: "Success Get data",
      data: users
    })
  },

  getUserByID: async (req, res) => {
    const ids = req.params.id
    const users = await User.findOne({
      where: {id: ids }
    })

    res.json({
      message: "Sucess get data by id",
      data: users
    })
  },

  addUser: async (req,res) => {
    const inputUser = req.body
    const newUser = await User.create(inputUser)

    res.status(200).json( {
      message: "Add user success",
      data: newUser
    })
  }
}