const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const tasksRoutes = require('./routes/tasks')
// setup .env file
dotenv.config({path: path.resolve(__dirname, '../config.env')})
const connect = require('./db/connect')

const app = express()
// middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasksRoutes)

// start server
const port = process.env.PORT || 3000;
const start = async() => {
 try {
  await connect
  app.listen(port, () => {
    console.log(`Listening to port ${port}..`)
  })
 } catch(err) {
  console.log(err)
 }
}

start()
