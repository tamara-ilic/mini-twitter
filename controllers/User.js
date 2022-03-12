const express = require('express')
const User = require('../models/User')
const Message = require('../models/Message')

async function getAllUsers(request, response, next) {
    const users = await User.find({})
    response.json(users)
    next()
}

async function getUser(request, response) {
    const user = await User.find({ _id: request.params.id })
    response.json(user)
}

async function getAllMessagesByUser(request, response) {
    const messages = await Message.find({ user_id: request.params.user_id })
    console.log("messages", request.params.user_id)
    response.json(messages)
}

const UserController = {
    getAllUsers,
    getUser,
    getAllMessagesByUser
}

module.exports = UserController