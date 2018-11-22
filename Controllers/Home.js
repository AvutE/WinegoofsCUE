// Get npm Path
var path = require('path');

//
exports.Index = function(req,res){
    res.sendFile(path.resolve('Views/index.html'));
};