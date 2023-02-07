import { validFieldsValidators, checkWorkoutFields, parseString, parseDay, parseNumber } from './workoutTools.js'

export const validateWorkoutFields = (dirtyData, allFields = true) => {
  if (!allFields) {
    const data = {}
    const { existsInvalidFields, givenFields } = checkWorkoutFields(dirtyData)

    if (existsInvalidFields) {
      throw new Error('There are invalid or missing fields!')
    }

    givenFields.forEach((field) => {
      const validator = validFieldsValidators[field]
      data[field] = validator(dirtyData[field])
    })

    return data
  }

  const data = {
    main_muscle_group: parseString(dirtyData.main_muscle_group, 'main muscle group'),
    workout_name: parseString(dirtyData.workout_name, 'workout name'),
    day: parseDay(dirtyData.day),
    series: parseNumber(dirtyData.series, 'series'),
    repetitions: parseNumber(dirtyData.repetitions, 'repetitions')
  }

  return data
}
