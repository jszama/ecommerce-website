const express = require('express');
const dotenv = require('dotenv');

const { processPayment, getPayment, getOrderPayments } = require('../services/payment');

dotenv.config();

const router = express.Router();

router.post('/:orderID', async (req, res) => { processPayment(req, res) });
router.get('/:paymentID', async (req, res) => { getPayment(req, res) });
router.get('/order/:orderID', async (req, res) => { getOrderPayments(req, res) });

module.exports = router;