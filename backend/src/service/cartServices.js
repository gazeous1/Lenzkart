var cartModel = require('../models/cartModel'); // Import the new cart model
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

// Create a cart in the database
module.exports.createCartDBService = (cartDetails) => {
    return new Promise((resolve, reject) => {
        var cartModelData = new cartModel();
        cartModelData.userId = cartDetails.userId; // Assuming you have a userId in the cart model
        cartModelData.products = cartDetails.products; // Assuming you have a products field in the cart model

        cartModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                console.error(error);
                reject(false);
            });
    });
}

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

        // Update the cart details, encrypting if needed
        cart.products = updatedCartDetails.products;

        await cart.save();

        return { status: true, msg: "Cart updated successfully" };
    } catch (error) {
        throw new Error("Error in updating cart: " + error.message);
    }
};
