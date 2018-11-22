var Wine = require('../Models/Wine');

exports.Wine = function(req, res){
    res.send('Hello?');
};

exports.Wines = function(req, res){
    Wine.find(function(error, wine){
        if(error)
        {
            console.log('Failed finding wine')
            return next(error);
        };
        res.send(wine);
    });
};

exports.GetWineById = function(req, res){
    Wine.findById(req.params.id, function(error, wine){
        if(error)
        {
            console.log('GetWineById has failed');
            return next(error);
        }
        res.send(wine);
    });
};

exports.UpdateExistingWineById = function(req, res){
    Wine.findByIdAndUpdate(req.params.id, {$set: req.body}, function(error){
        if (error)
        {
            console.log('UpdateExistingWineById has failed');
            return next(error);
        }
        res.send('Wine has been updated');
    });
};

exports.CreateNewWine = function(req, res){
    var wine = new Wine({
        name: req.body.name,
        price: req.body.price,
        artNum: req.body.artNum,
        origin: req.body.origin,
        region: req.body.region,
        grape: req.body.grape
    });
    
    wine.save(function(error){
        if (error)
        {
            console.log('CreateNewWine has failed');
            return next(error);
        }
        else
        {
            res.send('Wine has been created');
        }
    });
};

exports.DeleteWineById = function(req, res){
    Wine.findByIdAndDelete(req.params.id, {$set: req.body}, function(error){
        if (error)
        {
            console.log('DeleteExistingWinebyId has failed');
            return next(error);
        }
        res.send('Wine has been deleted');
    });
};