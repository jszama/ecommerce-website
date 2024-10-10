const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const User = require('../models/user');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (!user) throw new Error('Invalid credentials.');

        const isPasswordValid = await argon2.verify(user.password, password);
        if (!isPasswordValid) throw new Error('Invalid credentials.');
        
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = loginUser;