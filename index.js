// implement your API here

//let's import the express library into our project
const express = require('express');

//lets specify the database file we working with
const db = require('./data/db.js');

//lets create the server
const server = express();

//middleware
server.use(express.json());

server.get('/',(req,res) => {
    res.send('<h1>Welcome to the Project Database</h1>')
});

//When the client makes a GET request to /api/users:

// If there's an error in retrieving the users from the database:
// ---------cancel the request.
// ---------respond with HTTP status code 500.
// ---------return the following JSON object: 
// ---------{ error: "The users information could not be retrieved." }.


server.get('/users',(req,res)=>{
    db.find()
    .then(users => {
        res.json(users)
    })
    .catch(err =>{
        res.status(500).json({
            err:err,
            message: "The users information could not be retrieved"
        })
    })
    
});

// When the client makes a GET request to /api/users/:id:

// If the user with the specified id is not found:

// ----------return HTTP status code 404 (Not Found).
// ----------return the following JSON object: 
// ----------{ message: "The user with the specified ID does not exist." }.

// If there's an error in retrieving the user from the database:
// ---------- cancel the request.
// ----------respond with HTTP status code 500.

server.get('/users/:id',(req,res)=>{

    const { id } = req.params;

    db.findById(id)
    .then(users => {
        if(id){
            res.json(users)
        } else {
            res.status(404).json({
                message: "The user with the specified ID does not exist"
            })
        }
       
    })
    .catch(err =>{
        res.status(500).json({
            err:err,
            message: "The users information could not be retrieved"
        })
    })
    
});


//Let's make it listen
server.listen(4000,()=>{
    console.log("server is running on port 4000");
})