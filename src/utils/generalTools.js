export const isString = (data) => {
  return typeof data === 'string'
}

export const isNumber = (data) => {
  return !isNaN(Number(data))
}

export const validateReqId = (id) => {
  const parsedId = Number(id)

  if (isNaN(parsedId) || parsedId <= 0) {
    throw new Error('The id must be a positive number')
  }

  return parsedId
}

export const getRequestDate = () => new Date().toLocaleString()

export const getDate = () => {
  const date = new Date()
  const fullDate = date.toLocaleDateString()
  const fullHour = date.toTimeString().split(' ')[0]

  return `${fullDate} ${fullHour}`
}
