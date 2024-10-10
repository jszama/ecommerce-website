const shoppingCart = require('../models/shoppingCart');

const removeCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const cart = await shoppingCart.findOne(req.params.userId);

        if (!cart) {
            return res.status(404).send("Cart not found");
        }

        const item = cart.items.find(item => item.productId === productId);
        if (!item) {
            return res.status(404).send("Item not found in cart");
        }

        const index = cart.items.indexOf(item);
        cart.items.splice(index, 1);
        
        await cart.save();
        res.status(200).send("Item removed from cart successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = removeCart;