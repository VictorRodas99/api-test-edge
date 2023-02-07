import { isString } from './generalTools.js'

const parseName = (dirtyName) => {
  if (!isString(dirtyName)) {
    throw new Error('Nombre inválido o no ingresado')
  }

  return dirtyName
}

const parseEmail = (dirtyEmail) => {
  if (!isString(dirtyEmail)) {
    throw new Error('Email inválido o no ingresado')
  }

  // Validate if it is a correct email
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const isValid = regex.test(dirtyEmail)

  if (!isValid) {
    throw new Error('Email inválido o no ingresado')
  }

  return dirtyEmail
}

const parsePassword = (dirtyPassword) => {
  if (!isString(dirtyPassword) || String(dirtyPassword).length < 8) {
    throw new Error(
      'La contraseña no ha sido ingresada o es muy corta (Debe tener al menos 8 caracteres)'
    )
  }

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
  const isValid = regex.test(dirtyPassword)

  if (!isValid) {
    throw new Error(
      'La contraseña debe tener números, letras minúsculas y mayúsculas'
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
