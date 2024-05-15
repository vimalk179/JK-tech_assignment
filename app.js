
const express = require('express');
const app = express();
const route = require('./route/v1');
const { specs, swaggerUi } = require('./swagger');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', route);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Routes
app.get('/', (req, res) => {
  res.send('Hello World! This is JK-Tech');
});

module.exports = app;
