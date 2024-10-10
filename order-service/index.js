const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/order');

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Order-service is connected to MongoDB and is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Failed to connect to MongoDB: order-service", err);
});
