const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  firstname: {type: String, required:true, minlength: [2,'El nombre debe tener más de dos caracteres'], maxlength: 100},
  lastname: {type: String, required:true, minlength: 2, maxlength: 120},
  email: {type: String, required:true, unique: true},
  password: {type: String, validate: {
    validator: (value) => {
    return value && value.length >= 5 && value.length <= 20
    },
    message: 'La contraseña debe tener entre 5 y 20 caracteres.'
    }},
  profile: {type: String, default: 'user', enum: ['user', 'userAdmin']},
  enabled: {type: Boolean, default:false},
  created_at: {type: Date, default: Date.now}
})

module.exports = new mongoose.model('users', userSchema)
