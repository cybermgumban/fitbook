const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poststatSchema = new Schema({
    postID: String,
    likeCount: Number,
})

module.exports = mongoose.model("PostStat", authorSchema);