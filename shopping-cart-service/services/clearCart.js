const shoppingCart = require('../models/shoppingCart');

const clearCart = async (req, res) => {
    try {
        const cart = await shoppingCart.findOne(req.params.userId);
        if (cart) {
            cart.items = [];
            await cart.save();
        }
        res.status(200).send("Cart cleared successfully");
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = clearCart;