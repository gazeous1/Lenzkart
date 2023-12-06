
const express = require('express');
const checkoutController = require('../src/controllers/checkoutcontroller');
const router = express.Router();

router.route('/checkout/create').post(checkoutController.createCheckoutControllerFn);
router.route('/checkout/all').get(checkoutController.getAllCheckoutsControllerFn);
module.exports = router;
