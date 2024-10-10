const express = require('express');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notification');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/notifications', notificationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});