const Product = require('../models/product');

const updateProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;

        await Product.findByIdAndUpdate(req.params.id, { name, price, description, category, stock });

        res.status(200).json({ message: 'Product updated successfully' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = updateProduct;