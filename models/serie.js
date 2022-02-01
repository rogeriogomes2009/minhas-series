const mongoose = require('mongoose')

const SerieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enumValues: ['assistir', 'assistindo', 'assistido']
  },
  comments:[ String ]
})
const Serie = mongoose.model('Serie', SerieSchema)
module.exports = Serie