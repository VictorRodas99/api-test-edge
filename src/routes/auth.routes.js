import { Router } from 'express'
import { guard } from '../middlewares/guard.js'
import { registerUser, loginUser, logoutUser } from '../controllers/auth.controller.js'

const router = Router()

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .get('/logout', guard, logoutUser)

export default router
