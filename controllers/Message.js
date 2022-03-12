const express = require('express')
const Message = require('../models/Message')

async function getAllMessages(request, response, next) {
    const Messages = await Message.find({})
    response.json(Messages)
    next()
}

async function getMessage(request, response) {
    const Message = await Message.find({ _id: request.params.id })
    response.json(Message)
}

const MessageController = {
    getAllMessages,
    getMessage
}

module.exports = MessageController