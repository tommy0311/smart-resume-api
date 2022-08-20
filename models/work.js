const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tech = require('./tech')

const WorkSchema = new Schema({
  id: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  years: {
    type: String,
    default: ''
  },
  technologies: {
    type: [Tech.schema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Work', WorkSchema)
