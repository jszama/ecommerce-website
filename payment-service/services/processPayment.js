const Payment = require('../models/payment');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const processPayment = async (req, res) => {
    try {
        const { orderID } = req.params;
        const { amount, paymentMethodID } = req.body;

        const charge = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'gbp',
            payment_method: paymentMethodID,
            confirm: true
        });

        await Payment.create({ orderID, amount, status: charge.status, paymentMethod: "stripe" }).save();
        res.status(200).json({ charge });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = processPayment;