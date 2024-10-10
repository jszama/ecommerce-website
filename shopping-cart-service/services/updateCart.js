const shoppingCart = require('../models/shoppingCart');

const updateCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const cart = await shoppingCart.findOne(req.params.userId);
        if (cart) {
            const item = cart.items.find(item => item.productId === productId);

            if (item) {
                item.quantity = quantity;
            } else {
                cart.items.push({ productId, quantity });
            }

            await cart.save();
        } else {
            await shoppingCart.create({ userId: req.params.userId, items: [{ productId, quantity }] });
        }
        res.status(200).send("Cart updated successfully");
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = updateCart;