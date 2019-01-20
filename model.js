let mongoose = require("mongoose");

let messageSchema = mongoose.Schema({
    name: String,
    message: String
});

let messageModel = mongoose.model("greetings", messageSchema);

module.exports = messageModel;