const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/router/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/server',express.static(`${__dirname}/server`));
// app.use('/www',express.static(`${__dirname}/www`));
// app.use('/node_modules',express.static(`${__dirname}/node_modules`));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Running in port 3000');
  console.log('route', routes);
});
