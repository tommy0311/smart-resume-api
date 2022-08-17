const resumeServices = require('../../services/resume-services')

const resumeController = {
  getResume: (req, res, next) => {
    resumeServices.getResume(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = resumeController
