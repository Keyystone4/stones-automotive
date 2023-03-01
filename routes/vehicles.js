var express = require('express');
var router = express.Router();
var vehiclesCtrl = require('../controllers/vehicles');

router.get('/new', vehiclesCtrl.new);
router.get('/', vehiclesCtrl.index);
router.get('/:id', vehiclesCtrl.show);
router.post('/', vehiclesCtrl.create);
router.delete('/vehicles/:id', vehiclesCtrl.delete);

module.exports = router;
