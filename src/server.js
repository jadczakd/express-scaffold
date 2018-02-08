import express from 'express'
import bodyParser from 'body-parser'
import db from './config/db'
import routes from './router'
import config from './config'

const app = express()
// allow for JSON formatted requests
app.use(bodyParser.json())
app.listen(config.port, () => {
  console.log(`app listening on ${config.port}`)
})
// including the predefined routes
app.use(routes)
// Uncaught exceptions
process.on('uncaughtException', err => console.error('Uncaught excepotion:', err))
// unhandled promises
process.on('unhandlerdRejection', err => console.error('unhandled rejection:', err))
if (process.env.NODE_ENV !== 'test') {
  // connect to db
  db.connect()
}
// starting to listen

export default app
