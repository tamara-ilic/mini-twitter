const express = require('express')
const app = express()
const port = process.env.port || 8585
require('dotenv').config()
const connectToDB = require('./models')
const cors = require('cors')
const messageRouter = require('./routes/Message')
const userRouter = require('./routes/User')

app.use((request, result, next) => {
    console.log(request.method, request.path, request.sessionID)
    next()
})

app.use(express.json())
app.use(cors())

// TBC whether to delete below fix for Heroku deployment issues
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

app.use((error, request, result, next) => {
    console.error(error.message)
    result.status(500).send('Something broke!')
})

app.use('/messages', messageRouter)
app.use('/users', userRouter)

connectToDB().then(() => {
    app.listen(port, () => console.log(`Started listening on PORT ${port}`))
})