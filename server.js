const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/router/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/server',express.static(path.join(__dirname, 'server')));
app.use('/views',express.static(path.join(__dirname, 'views')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
app.use('/script', express.static(path.join(__dirname, 'views')));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Running in port 3000');
});
