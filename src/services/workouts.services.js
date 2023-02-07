import { Workout } from '../models/Workout.js'

/**
 * @param {{
 * main_muscle_group: string,
 * workout_name: string,
 * day: number,
 * series: number,
 * repetitions: number }} data
 *
 * @returns { Promise<{ code: number, message: string }> } response
 */
export const createWorkout = async (data) => {
  try {
    await Workout.create(data)

    return {
      code: 200,
      message: 'Workout created succesfully!'
    }
  } catch (error) {
    return {
      code: 503,
      message: 'Database error'
    }
  }
}

export const updateWorkoutBy = async ({ condition, updatedData }) => {
  try {
    const [result] = await Workout.update(updatedData, { where: condition })
    return result
  } catch (error) {
    return { error }
  }
}
