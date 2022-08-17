const Resume = require('../models/resume')

const resumeServices = {
  getResume: async (req, cb) => {
    try {
      const resume = await Resume.findById(req.params.id)

      return cb(null, resume)
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = resumeServices
