const cartmodels = require('../models/cartModel');

var addtoCartFn = async (req, res) => {
    try {
        const newCartItem = new cartmodels({
            product_id: req.body.product_id,
            productprice: req.body.productprice,
            quantity: req.body.quantity,
            userId: req.userId,
        });

        await newCartItem.save();

        // If you want to send a response back to the client
        res.json({ message: "Product added to cart successfully", newCartItem });
    } catch (error) {
        console.error(error);
        // If an error occurs, send an error response to the client
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addtoCartFn };
