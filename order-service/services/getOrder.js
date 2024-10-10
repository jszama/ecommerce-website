const Order = require('../models/order');

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json({ order });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = getOrder;