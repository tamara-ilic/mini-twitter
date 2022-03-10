const express = require('express')
const app = express()
const port = process.env.port || 8585
require('dotenv').config()
const cors = require('cors')
const connectToDB = require('./models')
const userRouter = require('./routes/User')

app.use((request, result, next) => {
    console.log(request.method, request.path, request.sessionID)
    next()
})

app.use(express.json())
app.use(cors())

app.use((error, request, result, next) => {
    console.error(error.message)
    result.status(500).send('Something broke!')
})

app.use('/users', userRouter)

connectToDB().then(() => {
    app.listen(port, () => console.log(`Started listening on PORT ${port}`))
})