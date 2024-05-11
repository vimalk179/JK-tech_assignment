const express = require('express');
const routes = require('./route/v1');
const cors = require('cors');
const bodyParser = require('body-parser')
const httpStatus = require('http-status');
const config = require('./config');

const fileupload = require('express-fileupload');


const app = express();

app.use(cors())
app.options('*', cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileupload())

app.use('/v1', routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;
