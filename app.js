require('dotenv').config();
var express = require('express');
var path = require('path');

var viewsRouter = require('./routes/views');
var requestsRouter = require('./routes/requests');

var app = express();

const cors = require('cors');
var corsOptions = { origin: 'https://react-aria-live-component.herokuapp.com', credentials: true };

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.use('/', viewsRouter);
app.use('/', cors(corsOptions), requestsRouter);

module.exports = app;