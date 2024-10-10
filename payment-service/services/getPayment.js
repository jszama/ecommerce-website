const Payment = require('../models/payment');

const getPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.paymentID);
        res.status(200).json({ payment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = getPayment;