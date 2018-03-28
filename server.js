'use strict';

const express = require('express');

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use(express.static('public', {
  etag: false,
  maxAge: 0,
  lastModified: false,
}));

app.listen(8080);
