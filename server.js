const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/router/index');

app.set('view engine', 'jade');

app.use('/public', express.static(path.join(__dirname, 'www')));
app.use('/teste', express.static(path.join(__dirname, 'www/html/menu')));
app.use('/', routes);

app.listen(3000, (a) => {
  console.log('Running in port 3000');
});
