import { Router } from 'express'
import { guard } from '../../middlewares/guard.js'
import { getUserInfo } from '../../controllers/user.controller.js'

const router = Router()

router.get('/profile', guard, getUserInfo)

export default router
