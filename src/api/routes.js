import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => { res.status(200).json({'text': 'These are not the endpoints you are looking for!'}) })

export default router
