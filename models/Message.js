const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        text: { required: true, type: String },
        date: { required: true, type: String },
        user_id: { required: true, type: Number },
        picture: { required: false, type: String }
    }
);

const Message = mongoose.model("Message", MessageSchema);

module.export = Message;

