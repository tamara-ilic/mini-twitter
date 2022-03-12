const express = require('express')
const router = express.Router()
const User = require('../models/User')

// GET all users
router
    .route('/')
    .get(async (request, response) => {
        const Users = await User.find({})
        response.json(Users)
    })

// GET one user by id
router
    .route('/:id')
    .get(async (request, response) => {
        const User = await User.find({ _id: request.params.id })
        response.json(User)
    })

// GET all messages belonging to one user
router
    .route('/:id/messages')
    .get(async (request, response) => {
        const Messages = await User.find({ _id: request.params.id.messages }) // TODO: ask Chris
        response.json(Messages)
    })

module.exports = router