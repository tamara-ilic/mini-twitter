const express = require('express')
const User = require('../models/User')

async function getAllUsers(request, response, next) {
    const users = await User.find({})
    response.json(users)
    next()
}

async function getUser(request, response) {
    const user = await User.find({ _id: request.params.id })
    console.log(request.params.id);
    response.json(user)
}

async function getAllMessagesByUser(request, response) {
    const messages = await User.find({ id: request.params.id.messages })
    response.json(messages)
}

const UserController = {
    getAllUsers,
    getUser,
    getAllMessagesByUser
}

module.exports = UserController