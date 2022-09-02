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
  createWorks,
  createTechs
} = require('./resumeFactory')

db.once('open', async () => {
  try {
    const userDemo = await UserModel.findOne({ account: 'tchen' })
    const userId = userDemo._id

    let works = createWorks()
    works = works.map(work => {
      work.technologies = createTechs()
      return work
    })

    const body = {
      basicInfo: createBasicInfo(),
      skills: createIcons(),
      projects: createProjects(),
      experience: works
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
