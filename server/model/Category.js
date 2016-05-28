const sequelize = require('./data/database').sequelize;
const Sequelize = require('./data/database').Sequelize;

const User = sequelize.define('category', {
  name: Sequelize.STRING,
  descripition: Sequelize.STRING
});

sequelize.sync().then(() => {
  return User.create({
    name: 'fruits',
    descripition: ''
  });
}).then( (jane) => {
  console.log('conectou',jane.get({
    plain: true
  }));
});

module.exports = User;
