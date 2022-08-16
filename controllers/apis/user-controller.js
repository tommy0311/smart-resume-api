const userServices = require('../../services/user-services')

const resumeController = {
  getResumes: (req, res, next) => {
    userServices.getResumes(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = resumeController
