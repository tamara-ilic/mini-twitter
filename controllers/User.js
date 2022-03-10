const express = require('express')
const User = require('../models/User')

async function getAllUsers(request, response, next) {
    const users = await User.find({})
    response.json(users)
    next()
}

async function getUser(request, response) {
    const user = await User.find({ _id: request.params.id })
    response.json(user)
}

const UserController = {
    getAllUsers,
    getUser
}

module.exports = UserController