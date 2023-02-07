import { Workout } from '../models/Workout.js'
import { findBy } from '../services/tools.services.js'
import { validateWorkoutFields } from '../utils/validatorWorkout.js'
import { parseDay } from '../utils/workoutTools.js'
import { createWorkout as createWorkoutDB, updateWorkoutBy } from '../services/workouts.services.js'
import { validateReqId, getRequestDate } from '../utils/generalTools.js'

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

export const getWorkoutsByDay = async (req, res) => {
  try {
    const userId = req.session.id
    const day = parseDay(req.params.day)

    const workouts = await findBy({
      condition: { user_id: userId, day },
      model: Workout,
      all: true
    })

    if (workouts !== null && 'error' in workouts) {
      return res.status(503).json({
        error: 'Database Error'
      })
    }

    if (workouts.length === 0) {
      return res.status(404).json({
        message: `The trainings of day ${day} have not been found`
      })
    }

    const withoutDayField = workouts.map(workout => {
      const { day, ...data } = workout
      return data
    })

    return res.json({
      day,
      workouts: withoutDayField
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export const createWorkout = async (req, res) => {
  try {
    const { id } = req.session
    const workoutData = validateWorkoutFields(req.body)

    const { code, message } = await createWorkoutDB({ ...workoutData, user_id: id })

    return res.status(code).json({
      message,
      createdAt: getRequestDate()
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export const updateWorkout = async (req, res) => {
  try {
    const userId = req.session.id
    const workoutId = validateReqId(req.params.id)
    const updatedData = validateWorkoutFields(req.body, false)

    const result = await updateWorkoutBy({
      condition: { id: workoutId, user_id: userId },
      updatedData
    })

    if (!result) {
      return res.status(404).json({
        message: `Workout with id ${workoutId} not found or given data are the same that the original`
      })
    }

    if (typeof result === 'object' && 'error' in result) {
      return res.status(503).json({
        error: 'Database Error'
      })
    }

    return res.json({
      message: 'Successfull update!',
      updatedAt: getRequestDate(),
      updatedFields: Object.keys(updatedData)
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export const deleteWorkout = () => {}
