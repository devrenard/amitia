const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pointsShifumi: {
    type: Number,
    default: 10
  },
  pointsDes: {
    type: Number,
    default: 10
  },
  bot: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema);