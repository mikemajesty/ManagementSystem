const Sequelize = require('sequelize');

var sequelize = new Sequelize('myapp', 'admin', 'Majesty7893#', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate().then((data) => {
    console.log('The connections was successfully');
  }).catch((err) => {console.log('error: ',err);})

module.exports = {
    sequelize,
    Sequelize
}
