const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postcommentSchema = new Schema({
    postID: String,
    userID: Date,
    comment: String,
    dateComment: Date,
})

module.exports = mongoose.model("PostComment", authorSchema);