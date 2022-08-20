const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TechSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  select: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Tech', TechSchema)
