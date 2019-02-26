'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./api');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Log requests to console
app.get('/', function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Connect to API router
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
