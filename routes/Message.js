const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

// GET all messages
router
    .route('/')
    .get(async (request, response) => {
        const Messages = await Message.find({})
        response.json(Messages)
    })

// GET one message by id
router
    .route('/:id')
    .get(async (request, response) => {
        const Message = await Message.find({ _id: request.params.id })
        response.json(Message)
    })

module.exports = router