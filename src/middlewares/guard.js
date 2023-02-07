import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const SECRET = process.env.SECRET

export const guard = (req, res, next) => {
  if (!('access-token' in req.cookies)) {
    return res.status(403).json({
      message: 'User not authenticated'
    })
  }

  const userToken = req.cookies['access-token']

  try {
    const isValidToken = jwt.verify(userToken, SECRET)

    if (isValidToken) {
      const { payload } = jwt.decode(userToken, { complete: true })
      req.session = payload // Overwrite request object to store user id

      return next()
    } else {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }
  } catch (error) {
    return res.status(401).json({
      error: error.message
    })
  }
}
