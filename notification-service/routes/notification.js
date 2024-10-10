const express = require('express');
const emailService = require('../services/emailService');

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;
    try {
        await emailService.sendEmail(to, subject, text);
        res.status(200).send("Notification sent successfully");
    } catch (error) {
        console.error("Error sending notification:", error);
        res.status(500).send("Error sending notification");
    }
});

module.exports = router;