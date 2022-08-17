const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../config/mongoose')
const User = require('../models/user')
const Icon = require('../models/icon')
const Resume = require('../models/resume')

const seedDemo = {
  resumeName: 'USER RESUME',
  name: 'USER DEMO',
  titles: ['Front-end Developer', 'Senior Data Engineer', 'Dev Team lead', 'Mobile App Developer'],
  description_header: 'Hi',
  description: "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜"
}

db.once('open', async () => {
  try {
    const userDemo = await User.findOne({ account: 'demo' })
    const userId = userDemo._id
    const icons = await Icon.find({})
    await Resume.create({ ...seedDemo, userId: userId, skills: icons })

    console.log('resume seed done')
    process.exit()
  } catch (err) {
    console.log('resume seed err: ' + err)
    process.exit()
  }
})
