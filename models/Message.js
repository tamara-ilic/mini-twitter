const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
        text: { required: true, type: String },
        date: { required: true, type: Date },
        user_id: { required: true, type: String },
        picture: { required: false, type: String }
    },
    { timestamps: true }
);

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;