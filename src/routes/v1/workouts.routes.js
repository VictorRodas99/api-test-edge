import { Router } from 'express'
import { guard } from '../../middlewares/guard.js'
import { getWorkouts, createWorkout, updateWorkout, deleteWorkout, getWorkoutsByDay } from '../../controllers/workouts.controllers.js'

const router = Router()

router.get('/', guard, (req, res) => {
  const { baseUrl } = req
  res.redirect(`${baseUrl}/docs`)
})

router
  .get('/workouts', guard, getWorkouts)
  .get('/workouts/:day', guard, getWorkoutsByDay)
  .post('/workouts', guard, createWorkout)
  .put('/workouts/:id', guard, updateWorkout)
  .delete('/workouts/:day/:id', guard, deleteWorkout)

export default router
