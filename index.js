const express = require('express')
const app = express()
const port = process.env.port || 8585
require('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Started listening on PORT ${port}`))