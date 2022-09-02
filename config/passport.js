const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportJWT = require('passport-jwt')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

// setup passport strategy
passport.use(new LocalStrategy(
  // customize user field
  {
    usernameField: 'account',
    passwordField: 'password',
    passReqToCallback: true
  },
  // authenticate user
  (req, account, password, cb) => {
    User.findOne({ account })
      .then(user => {
        if (!user) {
          return cb(Error("User didn't exist!"))
        }

        bcrypt.compare(password, user.password).then(res => {
          if (!res) {
            return cb(Error('account or password incorrect!'))
          }
          return cb(null, user)
        })
      })
      .catch(err => {
        return cb(err)
      })
  }
))
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(jwtOptions, (jwtPayload, cb) => {
  User.findById(jwtPayload._id)
    .lean()
    .then(user => {
      if (user) {
        return cb(null, user)
      }
      return cb(null, false)
    })
    .catch(err => cb(err))
}))

module.exports = passport