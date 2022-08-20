const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IconSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  select: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Icon', IconSchema)
