// Get npm express
var express = require('express');

// Get Express Router object
var router = express.Router();

// Get home controller

var HomeController = require('../Controllers/Home');

// Set up default Route '/' 
router.get('/', HomeController.Index);

// export
module.exports = router;