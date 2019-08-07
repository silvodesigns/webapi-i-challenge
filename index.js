// implement your API here

//let's import the express library into our project
const express = require('express');

//lets specify the database file we working with
const db = require('./data/db.js');

//lets create the server
const server = express();

server.get('/',(req,res) => {
    res.send('<h1>Welcome to the Project Database</h1>')
})

//When the client makes a GET request to /api/users:

// If there's an error in retrieving the users from the database:
// ---------cancel the request.
// ---------respond with HTTP status code 500.
// ---------return the following JSON object: 
// ---------{ error: "The users information could not be retrieved." }.

//Let's make it listen
server.listen(4000,()=>{
    console.log("server is running on port 4000");
})