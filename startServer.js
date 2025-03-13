//importing the main app.js configuration.
const app = require('./app');

// //defining the get route.
// //hanlding the user request using HTTP GET method.
// app.get(3000,(req,res) =>{
//     res.send('Hello Suraj!');
// });

//starting the server using listen()
const port = 3000;
app.listen(port,()=>{

    //msg
    console.log("Server running on ",port," for executing application");
    console.log("http://localhost:3000");
});