const express = require('express')
require('./model.js')
const Colaborator = require('./controller.js')
const routePath = '/colaborator'

module.exports = function (app) {
  const router = express.Router()

  router
    .get('/', Colaborator.list_all)
    .get('/:id', Colaborator.read)
    .post('/', Colaborator.create)
    .put('/:id', Colaborator.update)
    .delete('/:id', Colaborator.delete)

  app.use(routePath, router)
}
