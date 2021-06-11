import express from 'express'
import mongoose from 'mongoose'
import colaboratorRoute from './api/colaborator/route.mjs'

const app = express()
const port = process.env.PORT || 3000
const uri = process.env.URI

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log('Unable to connect', err)
  })

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (_req, res) => {
  res.send('API Running OK')
})

colaboratorRoute(app)

app.listen(port, () => {
  console.log(`API server started on: ${port}`)
})
