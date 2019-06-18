const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./Schema/Schemas');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow coss-origin requests
app.use(cors());

//connect to mongoDB database
// mongoose.connect('mongodb+srv://marlon:12345@cluster0-xtcjj.mongodb.net/test?retryWrites=true&w=majority')

//connect to mLab Atlas database
mongoose.connect('mongodb://marlon:1stContact@ds139427.mlab.com:39427/heroku_r76h2nzb')
mongoose.connection.once('open', () => {
    console.log('connected to database');
});


// connect to graphQL server
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening on request on port 4000');
});