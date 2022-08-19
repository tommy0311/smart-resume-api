const resumeServices = require('../../services/resume-services')

const resumeController = {
  getResume: (req, res, next) => {
    resumeServices.getResume(req, (err, data) => err ? next(err) : res.json(data))
  },
  putResume: (req, res, next) => {
    resumeServices.putResume(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = resumeController