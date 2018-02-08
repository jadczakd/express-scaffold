import { Router } from 'express'
import routes from './api/routes'

const home = Router()

home.use(routes)
// Catch unhandler errors
home.use((err, req, res) => {
  res.status(500).send(err)
})

export default home
