const orderHistory = require('../services/orderHistory');
const placeOrder = require('../services/placeOrder');
const processOrder = require('./updateOrder');
const trackOrder = require('./getOrder');

module.exports = { orderHistory, placeOrder, processOrder, trackOrder };