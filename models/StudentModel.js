const mongoose = require('mongoose')

//здесь нужно описать структуру сущности студента
var StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false
  },
  patronymic: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: false
  },
  group: {
    type: String,
    required: false,
  },
  directionOfTraining: {
    type: String,
    required: false,
  }
})


const Student = mongoose.model('Student', StudentSchema, 'server')

module.exports = Student