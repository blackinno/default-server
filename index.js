const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const { port } = require('./config')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.send('Hello from Default Server using NodeJS Framework.')
})

app.listen(port, err => {
  if (err) throw Error(err.message)
  console.info(`Server 🌎 Listening on http://localhost:${port}.`)
})
