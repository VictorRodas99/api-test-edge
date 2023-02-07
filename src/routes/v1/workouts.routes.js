import { Router } from 'express'
import { guard } from '../../middlewares/guard.js'

const router = Router()

router.get('/', guard, (req, res) => {
  res.json({
    message: 'This is a testing route',
    data: req.session
  })
})

export default router
