if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../config/mongoose')
const Icon = require('../models/icon')

const seedIcons = [
  {
    name: 'HTML 5',
    class: 'devicon-html5-plain',
    select: true
  },
  {
    name: 'CSS 3',
    class: 'devicon-css3-plain',
    select: true
  },
  {
    name: 'Angular',
    class: 'devicon-angularjs-plain',
    select: false
  },
  {
    name: 'TypeScript',
    class: 'devicon-typescript-plain',
    select: false
  },
  {
    name: 'JavaScript',
    class: 'devicon-javascript-plain',
    select: false
  },
  {
    name: 'Sass',
    class: 'devicon-sass-original',
    select: false
  },
  {
    name: 'Bootstrap',
    class: 'devicon-bootstrap-plain',
    select: false
  },
  {
    name: 'C#',
    class: 'devicon-csharp-plain',
    select: false
  },
  {
    name: 'MySql',
    class: 'devicon-mysql-plain',
    select: false
  }
]

db.once('open', async () => {
  try {
    await Icon.create(seedIcons)
    console.log('icon seed done')
    process.exit()
  } catch (err) {
    console.log('icon seed err: ' + err)
    process.exit()
  }
})
