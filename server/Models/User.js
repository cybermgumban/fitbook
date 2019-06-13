const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    dateRegistered: String,
    firstName: String,
    lastName: String,
    gender: String,
    dateOfBirth: String,
    occupation: String,
    about: String,
})

module.exports = mongoose.model("User", userSchema);