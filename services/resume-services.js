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

      await resume.updateOne({ body: req.body })

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
  },
  getResumes: async (req, cb) => {
    try {
      const result = await Resume.find({ userId: req.user._id }).lean()
      const resumes = result.map((resume) => {
        return {
          resumeId: resume._id,
          userId: resume.userId,
          name: resume.body.basicInfo.resumeName
        }
      })
      return cb(null, resumes)
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = resumeServices
