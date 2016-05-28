const Sequelize = require('sequelize');

var sequelize = new Sequelize('myapp', 'roor', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = {
    sequelize,
    Sequelize
}
