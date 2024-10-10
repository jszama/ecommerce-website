const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/payment');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5002;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Payment-service is connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Payment-service is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('Failed to connect to MongoDB: payment-service', err);
});