const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');
router
.route('/')
.get(customersController.getAllCustomers)
router
.route('/:id')
.get(customersController.getCustomersByID)
module.exports = router;