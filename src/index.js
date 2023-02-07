import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 8000

app.get('/', (req, res) => {
  res.send('Testing...')
})

app.listen(port, () => console.log(`Api listening on port ${port}...`))
