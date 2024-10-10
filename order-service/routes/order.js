const express = require('express');
const { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../services/order');

const router = express.Router();

router.get('/',  async (req, res) => { getOrders(req, res) });
router.get('/:id', async (req, res) => { getOrderById(req, res) });
router.post('/', async (req, res) => { createOrder(req, res) });
router.put('/:id', async (req, res) => { updateOrder(req, res) });
router.delete('/:id', async (req, res) => { deleteOrder(req, res)});

module.exports = router;