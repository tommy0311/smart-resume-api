if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../config/mongoose')
const UserModel = require('../models/user')
const Resume = require('../models/resume')

const {
  createBasicInfo,
  createIcons,
  createProjects,
  createWork,
  createTechs
} = require('./resumeFactory')

db.once('open', async () => {
  try {
    const userDemo = await UserModel.findOne({ account: 'demo' })
    const userId = userDemo._id

    const work = createWork()
    work.technologies = createTechs()

    const body = {
      basicInfo: createBasicInfo(),
      skills: createIcons(),
      projects: createProjects(),
      experience: [work]
    }

    await Resume.create({
      userId,
      body
    })

    console.log('resume seed done')
    process.exit()
  } catch (err) {
    console.log('resume seed err: ' + err)
    process.exit()
  }
})
