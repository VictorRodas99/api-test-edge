import { Workout } from '../models/Workout.js'
import { findBy } from '../services/tools.services.js'

export const getWorkouts = async (req, res) => {
  const { id } = req.session

  const workouts = await findBy({
    condition: { user_id: id },
    model: Workout,
    all: true
  })

  if (workouts !== null && 'error' in workouts) {
    return res.status(503).json({
      error: 'Database Error'
    })
  }

  if (workouts.length === 0) {
    return res.json({
      message: 'You don\'t have routines, please create one'
    })
  }

  return res.json({
    totalWorkouts: workouts.length,
    workouts
  })
}
export const getWorkoutByDay = async (req, res) => {}
export const createWorkout = () => {}
export const updateWorkout = () => {}
export const deleteWorkout = () => {}
