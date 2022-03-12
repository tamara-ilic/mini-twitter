const express = require('express')
const router = express.Router()
const UserController = require('../controllers/User')

const {
    getAllUsers,
    getUser,
    getAllMessagesByUser
} = UserController

// GET all users
router
    .route('/')
    .get(getAllUsers)

// GET one user by id
router
    .route('/:id')
    .get(getUser)

// GET all messages belonging to one user
router
    .route('/:id/messages')
    .get(getAllMessagesByUser)

module.exports = router