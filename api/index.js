import config from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import bookRoutes from './server/routes/BookRoutes'

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())

const PORT = process.env.PORT || 8080

app.use('/api/v1/books', bookRoutes)

app.get('*', (req, res) => {
  res.status(200).send({message: 'Welcome to this API'})
})

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})

export default app
