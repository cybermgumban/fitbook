const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authUserSchema = new Schema({
    userID: String,
    token: String,
    tokenExpiration: Number,
})

module.exports = mongoose.model("AuthUser", authUserSchema);