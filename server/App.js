const express = require('express');
const graphqlHTTP = require('express-graphql');
//const Schema = require('./Schema/Schema');
const cors = require('cors');

const app = express();
const { Client } = require('pg');

//allow coss-origin requests
app.use(cors());

//connect to Postgresql server
const connectionString = 'postgres://emhkraqcuohsus:e64cb126ad6294da3272ab2ec30e48afd26c5d248e09e2bdcb73b18a4366db29@ec2-75-101-128-10.compute-1.amazonaws.com:5432/dda75h13i7ktd9';

const client = new Client({
  connectionString: connectionString,
})

client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected to database')
    }
})

client.query('SELECT NOW()', (err, res) => {
  console.log("connected to database")
  client.end()
})


//connect to graphQL server
// app.use('/graphql', graphqlHTTP({
//     schema: Schema,
//     graphiql: true
// }));

app.listen(4000, () => {
    console.log('now listening on request on port 4000');
});