
const resumeServices = {
  getResumes: (req, cb) => {
    try {
      return cb(null, {})
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = resumeServices
