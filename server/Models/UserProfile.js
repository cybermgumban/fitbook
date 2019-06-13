const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userprofileSchema = new Schema({
    userID: String,
    firstName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    occupation: String,
    about: String,
})

module.exports = mongoose.model("UserProfile", authorSchema);