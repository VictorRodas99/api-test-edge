export const isString = (data) => {
  return typeof data === 'string'
}

export const isNumber = (data) => {
  return !isNaN(Number(data))
}

export const getDate = () => {
  const date = new Date()
  const fullDate = date.toLocaleDateString()
  const fullHour = date.toTimeString().split(' ')[0]

  return `${fullDate} ${fullHour}`
}
