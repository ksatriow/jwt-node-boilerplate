const { User } = require("../models")

const format = user => {
  const { id, username } = user
  return { 
    id,
    username,
    accessToken: user.generateToken()
  }
}

module.exports = {
  register: (req, res) => {
    User.register(req.body)
      .then(() => {
        res.status(201).json({
          status: "success",
          message: "Register success!"
        })
      })
  },
  login: (req, res) => {
    User.authenticate(req.body)
      .then(user => {
        res.json(format(user))
      })
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser)
  }
}