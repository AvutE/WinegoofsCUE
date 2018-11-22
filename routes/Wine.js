var express = require('express');

var router = express.Router();

var WineController = require('../controllers/Wine');

router.get('/', WineController.Wine);
router.get('/:id', WineController.GetWineById);

router.post('/', WineController.CreateNewWine);

router.put('/:id', WineController.UpdateExistingWineById);

router.delete('/:id', WineController.DeleteWineById);

module.exports = router;