
const express = require('express');
const app = express();
const route = require('./route/v1');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', route);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World! This is JK-Tech');
});

module.exports = app;
