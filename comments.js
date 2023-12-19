//create a web server that can listen to requests for /hello and /goodbye
//and respond with some text
//start the server using node.js
//check that the server works using curl or a web browser
//deploy the server to the cloud using now
//check that the server works on the cloud
//submit the URL of the server to earn points for this assignment

//import the express module
const express = require('express')

//create a new web server
const app = express()

//configure the route that the server will respond to
app.get('/', function (request, response) {
    response.send('hello world')
})

app.get('/goodbye', function (request, response) {
    response.send('goodbye world')
})

//start the server
app.listen(3000, function () {
    console.log('Server is running on port 3000')
})
