const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');

const routes = require('./server/router/index');
const category = require('./server/controller/category-controller');

app.set('view engine', 'jade');

app.use('/public', express.static(path.join(__dirname, 'www')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(parser());
app.use('/', routes);
// category
app.get('/api/category/findAll', category.findAll);
app.post('/api/category/create', category.create);
app.post('/api/category/delete', category.remove);
app.post('/api/category/edit', category.edit);

app.listen(3000, () => {
  console.log('Running in port 3000');
});
