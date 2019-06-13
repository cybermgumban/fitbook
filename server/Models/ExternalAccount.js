const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const externalaccountSchema = new Schema({
    userID: String,
    facebookEmail: String,
    twitterUsername: String,
})

module.exports = mongoose.model("ExternalAccount", authorSchema);