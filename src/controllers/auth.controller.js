import bcrypt from 'bcrypt'
import { User } from '../models/User.js'
import { findBy } from '../services/tools.services.js'
import { createUser } from '../services/user.services.js'

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body // TODO: validate fields
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
}

export const loginUser = async (_req, res) => {
  res.json({ message: 'TODO' })
}
