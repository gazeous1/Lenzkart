const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    items: [
        {
            product_id: String,
            productname: String,
            productprice: Number,
            quantity: Number,
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
