import { isString, isNumber } from './generalTools.js'

export const parseString = (dirt, field) => {
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

export const parseNumber = (dirtyNumber, field) => {
  if (!isNumber(dirtyNumber)) {
    throw new Error(`The ${field} field must be a number!`)
  }

  return Number(dirtyNumber)
}

export const validFieldsValidators = {
  main_muscle_group: parseString,
  workout_name: parseString,
  day: parseDay,
  series: parseNumber,
  repetitions: parseNumber
}

export const checkWorkoutFields = (data) => {
  if (!data) {
    return {
      existsInvalidFields: true,
      givenFields: []
    }
  }

  const givenFields = Object.keys(data)
  const validFields = Object.keys(validFieldsValidators)
  const invalidFields = givenFields.filter(field => !validFields.includes(field))

  return {
    existsInvalidFields: Boolean(invalidFields.length),
    givenFields
  }
}
