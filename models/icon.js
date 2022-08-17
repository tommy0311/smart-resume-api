const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IconsSchema = new Schema({
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

module.exports = mongoose.model('Icon', IconsSchema)
