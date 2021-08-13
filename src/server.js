import express from 'express'
import mongoose from 'mongoose'
import glob from 'glob'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 5000
const URI = process.env.URI || 'mongodb://root:root@localhost:27017/example?authSource=admin&w=1'

// Connect to MongoDB server
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log('Unable to connect', err)
  })

// Configure Express
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

glob.sync(path.join(__dirname, '/**/route.js')).forEach(file => {
  console.log(`... Loading ${file.replace(__dirname, '')}`)
  require(file)(app)
})

app.listen(PORT, () => {
  console.log(`API server started on: ${PORT}`)
})
