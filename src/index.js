import express from 'express'
import * as dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import { logger } from './middlewares/logger.js'
import { db } from './config/db.config.js'
import baseRoutes from './routes/base.routes.js'
import authRoutes from './routes/auth.routes.js'
import v1WorkoutRoutes from './routes/v1/workouts.routes.js'
import v2UserRoutes from './routes/v2/user.routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 8000

/* Middlewares */
app.use(express.json())
app.use(cookieParser())
app.use(logger)

/* Endpoints */
app.use(baseRoutes)
app.use('/api', authRoutes)
app.use('/api/v1', v1WorkoutRoutes)
app.use('/api/v2', v2UserRoutes, v1WorkoutRoutes)

app.use((req, res) => {
  res.status(404).json({
    error: `Cannot ${req.method} ${req.url}`
  })
})

/* Database initialization */
db.sync()
  .then(() => console.log('\nSuccessfully sync to the database!'))
  .catch((error) =>
    console.error('Unable to connect to the database:', error.message)
  )

app.listen(port, () => console.log(`Api listening on port ${port}...`))
