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
    const users = await User.findOne({
      where: {id: req.params.id}
    })

    res.json({
      message: "Sucess get data by id",
      data: users
    })
  }
}