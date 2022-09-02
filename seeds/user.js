const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../config/mongoose')
const User = require('../models/user')

const seedUser1 = {
  account: 'demo',
  password: 'demo'
}

const seedUsers = [seedUser1]

db.once('open', async () => {
  try {
    for (const [, seed] of seedUsers.entries()) {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(seed.password, salt)
      await User.create({
        account: seed.account,
        password: hash
      })
    }
    console.log('user seed done')
    process.exit()
  } catch (err) {
    console.log('user seed err: ' + err)
    process.exit()
  }
})
