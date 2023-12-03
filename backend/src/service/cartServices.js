const cartModel = require('../models/cartModel');
const encryptor = require('simple-encryptor')('123456789trytryrtyr');

// Create a cart in the database
module.exports.createCartDBService = async (cartDetails) => {
    try {
        const cartModelData = new cartModel({
            userId: cartDetails.userId,
            products: cartDetails.products,
        });

        await cartModelData.save();
        return { status: true, message: "Cart created successfully" };
    } catch (error) {
        console.error(error);
        throw new Error("Error in creating cart: " + error.message);
    }
};

// Retrieve a user's cart from the database
module.exports.getCartDBService = async (userId) => {
    try {
        const cart = await cartModel.findOne({ userId }).exec();

        if (!cart) {
            throw new Error("Cart not found");
        }

        // Decrypt any encrypted fields in the cart model if needed

        return { status: true, cart };
    } catch (error) {
        throw new Error("Error in retrieving cart: " + error.message);
    }
};

// Update a user's cart in the database
module.exports.updateCartDBService = async (userId, updatedCartDetails) => {
    try {
        const cart = await cartModel.findOne({ userId }).exec();

        if (!cart) {
            throw new Error("Cart not found");
        }

        // Update the cart details
        cart.products = updatedCartDetails.products;

        await cart.save();

        return { status: true, message: "Cart updated successfully" };
    } catch (error) {
        throw new Error("Error in updating cart: " + error.message);
    }
};
