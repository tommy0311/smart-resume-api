const jwt = require('jsonwebtoken')

const userServices = {
  putlogin: (req, cb) => {
    try {
      const userData = req.user.toJSON()
      delete userData.password
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      return cb(null, { token, user: userData })
    } catch (err) {
      return cb(err)
    }
  }
}

module.exports = userServices
