const express = require('express')
const Message = require('../models/Message')

async function getAllMessages(request, response, next) {
    const messages = await Message.find({})
    response.json(messages)
    next()
}

async function getMessage(request, response) {
    const message = await Message.find({ _id: request.params.id })
    response.json(message)
}

const MessageController = {
    getAllMessages,
    getMessage
}

module.exports = MessageController