const express = require('express');
const bodyParser = require('body-parser');
const cart_route = express();
const cartController = require('../src/controllers/cartcontroller');

// Middleware to parse JSON bodies
cart_route.use(bodyParser.json());

// Middleware to parse form data
cart_route.use(bodyParser.urlencoded({ extended: true }));

// Define the route for adding items to the cart without authentication
cart_route.post('/api/add-to-cart', cartController.addtoCartFn);

module.exports = cart_route;


