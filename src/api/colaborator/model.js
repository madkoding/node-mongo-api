import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ColaboratorSchema = new Schema({
  rut: {
    type: String,
    required: 'Require rut'
  },
  name: {
    type: String,
    required: 'Require name'
  },
  age: {
    type: Number
  },
  rol: {
    type: String
  },
  pets: {
    type: Number
  },
  joined: {
    type: Date,
    default: Date.now
  },
  skills: {
    type: Array,
    default: []
  }
})

export default mongoose.model('colaborator', ColaboratorSchema, 'colaborator')
