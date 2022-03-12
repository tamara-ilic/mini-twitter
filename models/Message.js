const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
        handle: { required: true, type: String },
        text: { required: true, type: String },
        date: { required: true, type: Date },
        picture: { required: false, type: String }
    },
    { timestamps: true }
);

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;