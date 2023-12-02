// checkoutService.js

var cartModel = require('../models/cartModel');
var orderModel = require('../models/orderModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

// Helper function to calculate the total amount
function calculateTotalAmount(products) {
    let totalAmount = 0;
    products.forEach(product => {
        totalAmount += product.productprice * product.quantity;
    });
    return totalAmount;
}

// Checkout process
module.exports.checkoutDBService = async (userId) => {
    try {
        // Retrieve the user's cart
        const cart = await cartModel.findOne({ userId }).exec();

        if (!cart) {
            throw new Error("Cart not found");
        }

        // Create a new order using cart details
        var orderData = new orderModel();
        orderData.user_id = cart.user_id;
        orderData.products = cart.products;
        orderData.totalAmount = calculateTotalAmount(cart.products);

        // Save the order
        await orderData.save();

        // Clear the user's cart after checkout
        await cartModel.deleteOne({ userId }).exec();

        return { status: true, msg: "Checkout successful", order: orderData };
    } catch (error) {
        throw new Error("Error in checkout process: " + error.message);
    }
};
