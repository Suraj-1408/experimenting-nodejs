//importing express module, that helps in simplying the process of request-reponse between 
//user and server.

const express = require('express');

//importing path
const path = require('path');

//calling express.
const app = express();

//using the object app to define route.
//here we are using HTTP GET method to define the route.
//1) first defining a root URL.
app.get('/',(req,res)=>{
    res.send(`
        <b>Welcome to root URL</b>
        <a href = "/nameList">Check NameList</a>        
    `);
});

app.get('/nameList',(req,res)=>{
    res.sendFile(path.join(__dirname,"static",'names.html'));
});


//export this file so that it can be used by others.
module.exports = app;