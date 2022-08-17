const userServices = require('../../services/user-services')

const userController = {
  getUserResumes: (req, res, next) => {
    userServices.getUserResumes(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = userController
