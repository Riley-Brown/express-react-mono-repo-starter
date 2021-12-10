import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

export const corsOrigins = ['http://localhost:3000']

const corsOptions = {
  credentials: true,
  origin: corsOrigins,
}

const PORT = process.env.PORT || 9999

const app = express()

export const server = app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
})

app.use(express.json())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.post('/test-post', (req, res) => {
  console.log('Got some data from the frontend!', req.body)
  res.json({ type: 'ok', data: req.body })
})
