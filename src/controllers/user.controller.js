import { User } from '../models/User.js'
import { findBy } from '../services/tools.services.js'

export const getUserInfo = async (req, res) => {
  const { id } = req.session

  const user = await findBy({
    condition: { id },
    model: User
  })

  if (typeof user === 'object' && 'error' in user) {
    res.status(503).json({
      error: 'Database Error'
    })
  }

  return res.json({
    message: 'User information',
    userId: id,
    username: user.name,
    email: user.email
  })
}
