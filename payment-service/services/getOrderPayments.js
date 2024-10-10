const Payment = require('../models/payment');

const getOrderPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ orderID: req.params.orderID });
        res.status(200).json({ payments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = getOrderPayments;