const express = require('express');
const loginUser = require('../services/loginUser');
const registerUser = require('../services/registerUser');

const router = express.Router();

router.post('/register', async (req, res) => { registerUser(req, res) });
router.post('/login', async (req, res) => { loginUser(req, res) });

module.exports = router;