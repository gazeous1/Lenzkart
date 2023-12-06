
const Checkout = require('../models/checkoutModel');


module.exports.createCheckoutDBService = async (checkoutDetails) => {
    try {
        console.log("Received checkout details in createCheckoutDBService:", checkoutDetails);

    
        if (!checkoutDetails.user_id || !checkoutDetails.items || checkoutDetails.items.length === 0) {
            throw new Error("Missing required fields in the request");
        }

        const totalAmount = checkoutDetails.items.reduce((sum, item) => {
            return sum + item.productprice * item.quantity;
        }, 0);

        checkoutDetails.totalAmount = totalAmount;

        const checkoutModelData = new Checkout(checkoutDetails);
        const savedCheckout = await checkoutModelData.save();

        console.log("Checkout saved successfully:", savedCheckout);

        return { status: true, message: "Checkout completed successfully" };

    } catch (error) {
        console.error("Error in completing checkout:", error.message);
        throw new Error("Error in completing checkout: " + error.message);
    }
};

module.exports.getAllCheckoutsDBService = async () => {
    try {
        const allCheckouts = await Checkout.find().exec();
        return { status: true, checkouts: allCheckouts };
    } catch (error) {
        console.error("Error in retrieving all checkouts:", error.message);
        throw new Error("Error in retrieving all checkouts: " + error.message);
    }
};
