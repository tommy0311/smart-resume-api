const Resume = require('../models/resume')
const { createTechs } = require('../seeds/resumeFactory')

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

      await resume.update({ body: req.body })

      return cb(null, resume.toJSON())
    } catch (err) {
      return cb(err)
    }
  },
  getTechnologies: async (req, cb) => {
    try {
      const technologies = createTechs()
      return cb(null, technologies)
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = resumeServices
