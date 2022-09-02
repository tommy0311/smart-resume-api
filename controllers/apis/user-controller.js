const userServices = require('../../services/user-services')

const userController = {
  putlogin: (req, res, next) => {
    userServices.putlogin(req, (err, data) => err ? next(err) : res.json({ status: 'success', ...data }))
  },
  getCurrentUser: (req, res) => {
    delete req.user.password
    return res.json({ ...req.user })
  }
}

module.exports = userController
