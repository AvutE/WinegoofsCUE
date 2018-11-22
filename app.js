// Get npm packages
var express = require('express');
var bodyParser = require('body-parser');

// Get Routes
var Home = require('./routes/Home');
var Wine = require('./routes/Wine');

// Get DB Connect (is in models)
require('./models/Respository');

// Express app object
var app = express();

//Express setting for handling text as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up Routes
app.use('/', Home);
app.use('/Wine', Wine);

// Static folder for scrips, css etc
app.use(express.static('public'));

// Get a PORT
var PORT = process.env.PORT || 4242;


// Start web server

app.listen(PORT, function(){
    console.log('Server is running, better go catch it!!');
});