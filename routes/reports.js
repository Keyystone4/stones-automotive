const express = require('express');
const router = express.Router();
const reportsCtrl = require('../controllers/reports');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/vehicles/:id/reports', ensureLoggedIn, reportsCtrl.create);
router.get('/:id/edit', reportsCtrl.edit);
router.put('/:vehicleId/reports/:id', reportsCtrl.update);



module.exports = router;