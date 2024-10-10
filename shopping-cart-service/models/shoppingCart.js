const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 }
    }]
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);