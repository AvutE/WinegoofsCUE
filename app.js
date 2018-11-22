// Get npm packages
var express = require('express');
var bodyParser = require('body-parser');

// Get Routes
var Home = require('./routes/home');
var Wine = require('./routes/wine');

// Get DB Connect (is in models)

// Express app object
var app = express();

// Set up Routes
app.use('/', Home);
app.use('/Wine', Wine);

// Get a PORT
var PORT = process.env.PORT || 4242;

// Start web server
app.listen(PORT, function(){
    console.log('Server is running, better go catch it!!');
});