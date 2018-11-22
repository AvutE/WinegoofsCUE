var mongoose = require('mongoose');

var db_url = 'mongodb://winnie:wine234@ds113454.mlab.com:13454/wineforwinegoofs';

mongoose.Promise = global.Promise;

mongoose.connect(db_url, {userNewUrlPaser: true})
    .then(function(){
        console.log('Connected to mLab MongoDB');
    })
    .catch(function(error){
        console.log('Error connecting to mLab MongoDB');
        console.log(error);
    });