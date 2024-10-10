const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product');

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`User-service is connected to MongoDB and is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Failed to connect to MongoDB: user-service", err);
});
