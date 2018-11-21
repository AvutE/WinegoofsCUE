// Get npm Path
var path = require('path');

//
exports.index = function(req,res){
    res.sendFile(path.resolve('views/index.html'));
};