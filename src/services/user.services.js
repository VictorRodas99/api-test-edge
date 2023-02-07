import { User } from '../models/User.js'

/**
 *
 * @param { { name: string, email: string, password: string } } data
 * @returns { Promise<{ code: number, message: string }> } response
 */
export const createUser = async (data) => {
  try {
    await User.create(data)

    return {
      code: 200,
      message: 'User registered!'
    }
  } catch (error) {
    return {
      code: 503,
      message: error.message
    }
  }
}
