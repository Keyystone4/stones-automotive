const express = require('express');
const router = express.Router();

const reportsCtrl = require('../controllers/reports');

router.post('/vehicles/:id/reports', reportsCtrl.create);

module.exports = router;