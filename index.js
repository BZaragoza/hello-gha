import { readFileSync } from 'fs'
import express from 'express'

const metadata = JSON.parse(readFileSync('./package.json'))
const { version } = metadata

const app = express()

app.get('/health', (req, res) => {
  res.json({ ok: true })
})

app.get('/version', (req, res) => {
  res.json({ version })
})

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello world' })
})

app.get('/goodbye', (req, res) => {
  res.status(200).json({ msg: 'Goodbye world' })
})

export default app.listen(process.env.PORT || 4000, () =>
  console.log('Running on http://localhost:4000')
)
