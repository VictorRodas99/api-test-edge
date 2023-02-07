import express from 'express'
import * as dotenv from 'dotenv'

import { logger } from './middlewares/logger.js'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 8000

/* Middlewares */
app.use(express.json())
app.use(logger)

/* Endpoints */
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the workout API register!',
    endpoints: {
      version_one: '/api/v1/',
      version_two: '/api/v2/'
    }
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: `Cannot ${req.method} ${req.url}`
  })
})

app.listen(port, () => console.log(`Api listening on port ${port}...`))
