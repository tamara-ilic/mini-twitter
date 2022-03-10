const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: { required: true, type: String },
        handle: { required: true, type: String },
        city: { required: true, type: String },
        dateJoined: { required: true, type: Date },
        avatar: { required: true, type: String },
        bio: { required: true, type: String }
    },
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User

