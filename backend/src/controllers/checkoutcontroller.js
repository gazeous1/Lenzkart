
const checkoutService = require('../service/checkoutServices');

const createCheckoutControllerFn = async (req, res) => {
    try {
        const checkoutDetails = req.body;
        const status = await checkoutService.createCheckoutDBService(checkoutDetails);
        if (status) {
            res.send({ status: true, message: "Checkout completed successfully" });
        } else {
            res.send({ status: false, message: "Error completing checkout" });
        }
    } catch (error) {
        console.error("Error in createCheckoutControllerFn:", error);
        res.send({ status: false, message: "Internal Server Error" });
    }
};

const getAllCheckoutsControllerFn = async (req, res) => {
    try {
        const result = await checkoutService.getAllCheckoutsDBService();

        if (result.status) {
            res.send({ status: true, checkouts: result.checkouts });
        } else {
            res.send({ status: false, message: "Error retrieving checkouts" });
        }
    } catch (error) {
        console.error("Error in getAllCheckoutsControllerFn:", error);
        res.send({ status: false, message: "Internal Server Error" });
    }
};


module.exports = { createCheckoutControllerFn, getAllCheckoutsControllerFn };
