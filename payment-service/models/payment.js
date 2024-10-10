const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: [true, 'Order ID is required'],
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    status: {
        type: String,
        required: [true, 'Currency is required'],
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
    },
    paymentDate: {
        type: Date,
        required: [true, 'Payment date is required'],
    }
});

module.exports = mongoose.model('Payment', paymentSchema);