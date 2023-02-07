import { Router } from 'express'
import { guard } from '../../middlewares/guard.js'
import { getWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout } from '../../controllers/workouts.controllers.js'

const router = Router()

router.get('/', guard, (req, res) => {
  res.json({
    message: 'This is a testing route',
    data: req.session
  })
})

router
  .get('/workouts', guard, getWorkouts)
  .get('/workouts/:id', guard, getWorkoutById)
  .post('/workouts', guard, createWorkout)
  .put('/workouts/:id', guard, updateWorkout)
  .delete('/workouts', guard, deleteWorkout)

export default router
