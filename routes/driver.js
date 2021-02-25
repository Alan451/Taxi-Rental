const express = require('express');
const driverModel = require('../models/driver')
const router = express.Router();
const driverController = require('../controllers/driverController')
/* GET home page. */
router.get('/driver',driverController.all);
router.get('/driver/:id',driverController.getOne);
router.post('/driver', driverController.createDriver);
router.patch('/driver/:id', driverController.updateDriver);
router.delete('/driver/:id',driverController.deleteDriver);


module.exports = router;
