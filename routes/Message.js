const express = require('express')
const router = express.Router()
const MessageController = require('../controllers/Message')

const {
    getAllMessages,
    getMessage
} = MessageController

// GET all messages
router
    .route('/')
    .get(getAllMessages)

// GET one message by id
router
    .route('/:id')
    .get(getMessage)

module.exports = router