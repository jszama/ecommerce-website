const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const shoppingCartRoutes = require('./routes/shoppingCart');

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use('/api/shopping-cart', shoppingCartRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Shopping-cart-service is connected to MongoDB and is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Failed to connect to MongoDB: shopping-cart-service", err);
});