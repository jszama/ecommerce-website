const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = registerUser;