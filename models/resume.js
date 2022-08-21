const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resumeSchema = new Schema({
  body: {
    type: Object
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
