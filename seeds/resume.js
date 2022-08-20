if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../config/mongoose')
const UserModel = require('../models/user')
const IconModel = require('../models/icon')
const Resume = require('../models/resume')
const TechModel = require('../models/tech')

const createWork = require('../utils/createWork')

const seedDemo = {
  resumeName: 'USER RESUME',
  name: 'USER NAME',
  titles: ['Front-end Developer', 'Senior Data Engineer', 'Dev Team lead', 'Mobile App Developer'],
  description_header: 'Hi',
  description: "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜"
}

db.once('open', async () => {
  try {
    const userDemo = await UserModel.findOne({ account: 'demo' })

    const userId = userDemo._id

    const icons = await IconModel.find({}).lean()

    const techs = await TechModel.find({}).lean()

    const work = createWork()
    work.technologies = techs

    await Resume.create({
      ...seedDemo,
      userId: userId,
      skills: icons,
      experience: [work]
    })

    console.log('resume seed done')
    process.exit()
  } catch (err) {
    console.log('resume seed err: ' + err)
    process.exit()
  }
})
