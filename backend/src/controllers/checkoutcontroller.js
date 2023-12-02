// cartController.js

const cartmodels = require('../models/cartModel');
const checkoutService = require('../services/checkoutService');

var addtoCartFn = async (req, res) => {
    try {
        const newCartItem = new cartmodels({
            product_id: req.body.product_id,
            productprice: req.body.productprice,
            quantity: req.body.quantity,
            userId: req.userId,
        });

        await newCartItem.save();

        // Call checkout functionality after adding to cart
        const checkoutResult = await checkoutService.checkoutDBService(req.userId);

        res.json({ message: "Product added to cart and checkout successful", checkoutResult });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addtoCartFn };
