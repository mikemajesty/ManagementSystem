const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/router/index');
const filePath = require('./path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

filePath().forEach((item) => {
  app.use(`${item.path}`, express.static(path.join(__dirname, `${item.name}`)));
});

app.use('/', routes);

app.listen(3000, () => {
  console.log('Running in port 3000');
});
