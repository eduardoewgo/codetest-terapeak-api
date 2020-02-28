const express = require('express');
const cors = require('cors');
const app = express();

// Handlers
const itemsRoutes = require('./routes/item.routes');

module.exports.configureExpress = () => {
    // Enabling CORS
    app.use(cors());

    //Routes
    app.use('/items', itemsRoutes);

    return app;
};
