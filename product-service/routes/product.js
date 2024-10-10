const express = require('express');
const { addProduct, getProducts, getProduct, deleteProduct, updateProduct } = require('../services/product');

const router = express.Router();

router.post('/add', async (req, res) => { addProduct(req, res) });
router.get('/', async (req, res) => { getProducts(req, res) });
router.get('/:id', async (req, res) => { getProduct(req, res) });
router.delete('/:id', async (req, res) => { deleteProduct(req, res) });
router.put('/:id', async (req, res) => { updateProduct(req, res) });

module.exports = router;