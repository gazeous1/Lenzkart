const contactService = require('../service/contactService');

const contactController = {
    addContact: async (req, res) => {
        try {
            // Call the function from contactService.js
            const status = await contactService.addContactDBService(req.body);

            if (status) {
                res.json({ status: true, message: "Contact form submitted successfully" });
            } else {
                res.json({ status: false, message: "Error submitting contact form" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, message: "Internal Server Error" });
        }
    },
};

module.exports = contactController;
