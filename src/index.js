import express from 'express'
import bodyParser from 'body-parser'
import db from './config/db'
import routes from './server'
import config from './config'

const app = express()
// connect to db
if (process.env.NODE_ENV !== 'test') {
  db.connect()
}
// allow for JSON formatted requests
app.use(bodyParser.json())
// starting to listen
app.listen(config.port, () => {
  console.log(`app listening on ${config.port}`)
})
// including the predefined routes
app.use(routes)

export default app
