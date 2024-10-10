const Product = require('../models/product');

const addProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        const product = new Product({ name, price, description, category, stock });
        await product.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = addProduct;