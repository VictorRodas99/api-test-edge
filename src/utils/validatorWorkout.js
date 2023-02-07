import { isString, isNumber } from './generalTools.js'

const parseString = (dirt, field) => {
  if (!isString(dirt)) {
    throw new Error(`Invalid or missing ${field}`)
  }

  return String(dirt)
}

export const parseDay = (dirtyDay) => {
  if (!isNumber(dirtyDay)) {
    throw new Error('Day field must be a number!')
  }

  const day = Number(dirtyDay)
  if (day < 0 || day > 5) {
    throw new Error('The given day must be between 1 and 5')
  }

  return day
}

const parseNumber = (dirtyNumber, field) => {
  if (!isNumber(dirtyNumber)) {
    throw new Error(`The ${field} field must be a number!`)
  }

  return Number(dirtyNumber)
}

export const validateWorkoutFields = (dirtyData) => {
  const data = {
    main_muscle_group: parseString(dirtyData.main_muscle_group, 'main muscle group'),
    workout_name: parseString(dirtyData.workout_name, 'workout name'),
    day: parseDay(dirtyData.day),
    series: parseNumber(dirtyData.series, 'series'),
    repetitions: parseNumber(dirtyData.repetitions, 'repetitions')
  }

  return data
}
