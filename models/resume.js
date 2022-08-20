const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Icon = require('./icon')
const Work = require('./work')

const resumeSchema = new Schema({
  resumeName: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description_header: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  skills: {
    type: [Icon.schema],
    default: []
  },
  experience: {
    type: [Work.schema],
    default: []
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('Resume', resumeSchema)
