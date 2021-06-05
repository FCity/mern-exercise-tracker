const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB, {
  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
})

const connection = mongoose.connection
connection.once('open', () => console.log('MongoDB database connection established successfully'))

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log(`Server running on port: ${port}`))