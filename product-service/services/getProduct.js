const Product = require('../models/product');

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = getProduct;