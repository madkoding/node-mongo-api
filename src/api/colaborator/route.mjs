import './model.mjs'
import Colaborator from './controller.mjs'

export default function (app) {
  app.route('/colaborator').get(Colaborator.list_all).post(Colaborator.create)

  app.route('/colaborator/:id').get(Colaborator.read)
}
