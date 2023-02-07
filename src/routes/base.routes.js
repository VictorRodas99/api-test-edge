import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the workout API register!',
    endpoints: {
      authentication: [
        '/api/register',
        '/api/login'
      ],
      version_one: '/api/v1/',
      version_two: '/api/v2/'
    }
  })
})

export default router
