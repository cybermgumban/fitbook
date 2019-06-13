const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postcommentSchema = new Schema({
    postID: String,
    userID: String,
    comment: String,
    dateComment: String,
})

module.exports = mongoose.model("PostComment", postcommentSchema);