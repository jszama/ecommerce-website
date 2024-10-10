const express = require('express');
const { addCart, getCart, updateCart, removeCart, clearCart } = require('../services/shoppingCart');

const router = express.Router();

router.post('/:userId/cart/add', addCart);
router.get('/:userId/cart', getCart);
router.put('/:userId/cart/update', updateCart);
router.delete('/:userId/cart/remove', removeCart);
router.delete('/:userId/cart/clear', clearCart);

module.exports = router;