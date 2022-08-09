import metadata from './package.json' assert { type: 'json' } // @eslint-ignore-line
// import data from './data.json' assert { type: 'json' } // @eslint-ignore-line
import express from 'express'

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

export default app.listen(process.env.PORT || 4000, () =>
  console.log('Running on http://localhost:4000')
)
