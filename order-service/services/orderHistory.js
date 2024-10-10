const Order = require('../models/order');

const orderHistory = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json({ orders });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = orderHistory;