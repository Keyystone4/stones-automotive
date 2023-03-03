var express = require('express');
var router = express.Router();
var vehiclesCtrl = require('../controllers/vehicles');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, vehiclesCtrl.new);
router.get('/', vehiclesCtrl.index);
router.post('/', ensureLoggedIn, vehiclesCtrl.create);
router.get('/:id', vehiclesCtrl.show);
router.delete('/:id', vehiclesCtrl.delete);

module.exports = router;
