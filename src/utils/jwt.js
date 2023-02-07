import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

export const createToken = (payload) => {
  const token = jwt.sign(
    {
      id: payload.id,
      name: payload.name
    },
    process.env.SECRET
  )

  return token
}
