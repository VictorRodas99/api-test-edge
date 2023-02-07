import { isString } from './generalTools.js'

const parseName = (dirtyName) => {
  if (!isString(dirtyName)) {
    throw new Error('Invalid or missing name!')
  }

  return dirtyName
}

const parseEmail = (dirtyEmail) => {
  if (!isString(dirtyEmail)) {
    throw new Error('Invalid or missing email!')
  }

  // Validate if it is a correct email
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const isValid = regex.test(dirtyEmail)

  if (!isValid) {
    throw new Error('Invalid or missing email!')
  }

  return dirtyEmail
}

const parsePassword = (dirtyPassword) => {
  if (!isString(dirtyPassword) || String(dirtyPassword).length < 8) {
    throw new Error(
      'Password is missing or is too short (must contain more than 8 characters)'
    )
  }

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
  const isValid = regex.test(dirtyPassword)

  if (!isValid) {
    throw new Error(
      'Password must contain numbers and uppercase and lowercase letters'
    )
  }

  return dirtyPassword
}

/**
 *
 * @param { any } dirtyData
 * @returns {{ name: string, email: string, password: string }} userData
 */
export const validateUserFields = (dirtyData) => {
  const data = {
    name: parseName(dirtyData.name),
    email: parseEmail(dirtyData.email),
    password: parsePassword(dirtyData.password)
  }

  return data
}
