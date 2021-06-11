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
  edad: {
    type: Number
  },
  rol: {
    type: String
  },
  mascotas: {
    type: Number
  },
  ingreso: {
    type: Date,
    default: Date.now
  },
  skills: {
    type: Array,
    default: []
  }
})

export default mongoose.model('colaborator', ColaboratorSchema, 'colaborator')
