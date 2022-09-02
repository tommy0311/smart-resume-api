const passport = require('../config/passport')
const Resume = require('../models/resume')

const authenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) return res.status(401).json({ status: 'error', message: 'unauthorized' })

    delete user.password
    req.user = user || null
    next()
  })(req, res, next)
}

const authenticatedResumeOwner = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, user) => {
    if (err || !user) return res.status(401).json({ status: 'error', message: 'unauthorized' })

    delete user.password
    req.user = user || null

    const resume = await Resume.findById(req.params.id)
    if (req.user && String(resume.userId) !== String(req.user._id)) {
      return res.status(403).json({ status: 'error', message: 'permission denied' })
    }
    next()
  })(req, res, next)
}

module.exports = {
  authenticated,
  authenticatedResumeOwner
}