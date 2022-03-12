const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
        user_handle: { required: true, type: String },
        text: { required: true, type: String },
        user_id: { required: true, type: mongoose.Schema.Types.ObjectId },
        picture: { required: false, type: String }
    },
    { timestamps: true }
);

MessageSchema.pre('find', function() {
    this.populate('author')
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message