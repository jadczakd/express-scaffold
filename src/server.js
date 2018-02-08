import { Router } from 'express'
import routes from './api/routes'

const home = Router()

home.use(routes)

export default home
