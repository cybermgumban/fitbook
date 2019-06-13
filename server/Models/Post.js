const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userID: String,
    datePublished: Date,
    content: String,
})

module.exports = mongoose.model("Post", authorSchema);