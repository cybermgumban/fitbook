const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendListSchema = new Schema({
    userID: String,
    friendsID: String,
})

module.exports = mongoose.model("FriendList", friendListSchema);