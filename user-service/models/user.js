const mongoose = require('mongoose');
const argon2 = require('argon2');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

userSchema.pre('save', async function (next) {
    this.password = await argon2.hash(this.password);
    next();
});

module.exports = mongoose.model('User', userSchema);