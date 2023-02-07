import bcrypt from 'bcrypt'
import { User } from '../models/User.js'
import { findBy } from '../services/tools.services.js'
import { createUser } from '../services/user.services.js'
import { createToken } from '../utils/jwt.js'
import { validateUserFields } from '../utils/validatorUser.js'

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = validateUserFields(req.body)
    const hashedPassword = await bcrypt.hash(password, 8)

    const userExists = await findBy({ condition: { email }, model: User })

    if (userExists != null && 'error' in userExists) {
      return res.status(503).json({
        error: 'Database Error'
      })
    }

    if (userExists) {
      return res.status(200).json({
        message: 'Email already registered!'
      })
    }

    const { code, message } = await createUser({
      name,
      email,
      password: hashedPassword
    })

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(400).json({
      error: error.message
    })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = validateUserFields(req.body)
    const user = await findBy({ condition: { email }, model: User })

    if (!user) {
      return res.status(404).json({
        message: 'User not registered!'
      })
    }

    if ('error' in user) {
      return res.status(503).json({
        error: 'Database Error'
      })
    }

    const dbPassword = user.password
    const areEqual = await bcrypt.compare(password, dbPassword)

    if (!areEqual) {
      return res.status(400).json({
        message: 'Wrong email and password combination!'
      })
    }

    const userToken = createToken(user) // Create jsonwebtoken

    res.cookie('access-token', userToken, {
      maxAge: 2.592e9, // 30 days for this token
      httpOnly: true
    })

    return res.json({
      message: `Welcome ${user.name}!`
    })
  } catch (error) {
    return res.status(400).json({
      error: error.message
    })
  }
}
