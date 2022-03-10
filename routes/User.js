const express = require('express')
const router = express.Router()
const User = require('../models/User')

router
    .route('/')
    .get(async (request, response) => {
        const Users = await User.find({})
        response.json(Users)
    })

router
    .route('/:id')
    .get(async (request, response) => {
        const User = await User.find({ _id: request.params.id })
        response.json(User)
    })

module.exports = router