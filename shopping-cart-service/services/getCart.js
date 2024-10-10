const ShoppingCart = require('../models/shoppingCart');

const getCart = async (req, res) => {
    try {
        const cart = await ShoppingCart.findOne({ userId: req.params.userId });
        res.status(200).json({ cart });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = getCart;