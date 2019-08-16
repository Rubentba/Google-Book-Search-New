// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes');

// For Heroku
const PORT = process.env.PORT || 3000;
const app = express();

// For Morgan
app.use(logger('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Define API routes here
app.use(routes);

// DB URL
const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://admin:googlebooks1@ds163517.mlab.com:63517/heroku_nn42zvf1';

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Making sure the server is live.
app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`);
});

module.exports = app;

// heroku push attempt 3
