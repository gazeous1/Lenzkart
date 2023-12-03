const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactcontroller');
const contactService = require('../services/contactService'); // Adjust the path based on your project structure

// Route to handle contact form submissions
router.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const result = await contactController.contactController(name, email, message);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
