const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const moment = require('moment')
const mongoose = require('mongoose')
// const http = require('http')
const app = express()

//Student routes
const studentsRoutes = require('./students')




//connect to mongodb
mongoose
  .connect(process.env.MONGO_CREDS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    connectTimeoutMS: 10000,
  })
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...'))

//Надстройки
app.use(cors())
app.use(express.json())

//Middleware
app.use(
    '/api/students',
    studentsRoutes
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))