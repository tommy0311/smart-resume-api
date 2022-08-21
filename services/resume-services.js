const Resume = require('../models/resume')

const resumeServices = {
  getResume: async (req, cb) => {
    try {
      const resume = await Resume.findById(req.params.id)
      return cb(null, resume.toJSON())
    } catch (err) {
      return cb(err)
    }
  },
  putResume: async (req, cb) => {
    try {
      const resume = await Resume.findById(req.params.id)

      if (!resume) {
        return cb(Error("Resume didn't exist!"))
      }

      const updateData = {}
      typeof req.body.resumeName === 'string' && (updateData.resumeName = req.body.resumeName)
      typeof req.body.title === 'string' && (updateData.title = req.body.title)
      typeof req.body.description_header === 'string' && (updateData.description_header = req.body.description_header)
      typeof req.body.description === 'string' && (updateData.description = req.body.description)
      Array.isArray(req.body.skills) && (updateData.skills = req.body.skills)

      await resume.update(updateData)

      return cb(null, resume.toJSON())
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = resumeServices
