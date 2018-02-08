import express from 'express'
import bodyParser from 'body-parser'
import db from './config/db'
import routes from './router'
import config from './config'
import { logger } from './utils'
import morgan from 'morgan'

const app = express()
// allow for JSON formatted requests
app.use(bodyParser.json())
// setup logging
app.use(morgan('combined', {stream: logger.stream}))
app.listen(config.port, () => {
  logger.info(`app listening on ${config.port}`)
})
// including the predefined routes
app.use(routes)
// Catch unhandler errors
// app.use((err, req, res) => {
//   res.status(500).send(err)
// })
// Uncaught exceptions
process.on('uncaughtException', err => logger.error('Uncaught excepotion:', err))
// unhandled promises
process.on('unhandlerdRejection', err => logger.error('unhandled rejection:', err))
if (process.env.NODE_ENV !== 'test') {
  // connect to db
  db.connect()
}
// starting to listen

export default app
