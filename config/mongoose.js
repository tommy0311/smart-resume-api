const mongoose = require('mongoose')

mongoose.connect(process.env.SMART_RESUME_MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb connection error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
