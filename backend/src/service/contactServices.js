const Contact = require('../models/contactModel');

const contactService = {
    addContactDBService: async (contactDetails) => {
        try {
            const newContact = new Contact({
                name: contactDetails.name,
                email: contactDetails.email,
                message: contactDetails.message,
            });

            await newContact.save();

            // Return a status indicating success
            return true;
        } catch (error) {
            console.error(error);
            // You might want to handle errors differently or log them
            return false;
        }
    },
};

module.exports = contactService;
