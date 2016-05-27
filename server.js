const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/router/index');

app.set('view engine', 'jade');

app.use('/public', express.static(path.join(__dirname, 'www')));
app.use('/libs', express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Running in port 3000');
});
