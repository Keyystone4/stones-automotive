var express = require('express');
var router = express.Router();
var vehiclesCtrl = require('../controllers/vehicles');

router.get('/new', vehiclesCtrl.new);
router.get('/', vehiclesCtrl.index);
router.post('/', vehiclesCtrl.create);
router.get('/:id', vehiclesCtrl.show);
router.delete('/:id', vehiclesCtrl.delete);

module.exports = router;
