import mongoose from 'mongoose'
const Colaborator = mongoose.model('colaborator')

const showResponse = (err, res, values) => {
  if (err) {
    res.send(err)
  }
  res.json(values)
}

export default {
  list_all: (_req, res) => {
    Colaborator.find({}, (err, colaborator) => showResponse(err, res, colaborator))
  },
  create: (req, res) => {
    const newColaborator = new Colaborator(req.body)
    newColaborator.save((err, colaborator) => showResponse(err, res, colaborator))
  },
  read: (req, res) => {
    Colaborator.findById(req.params.id, (err, colaborator) => showResponse(err, res, colaborator))
  },
  update: (req, res) => {
    Colaborator.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body,
      { new: true },
      (err, colaborator) => showResponse(err, res, colaborator)
    )
  },
  delete: (req, res) => {
    Colaborator.remove(
      {
        _id: req.params.id
      },
      (err, _colaborator) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Colaborator successfully deleted' })
      }
    )
  }
}
