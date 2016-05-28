const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const User = sequelize.define('category', {
  name: Sequelize.STRING,
  descripition: Sequelize.STRING
});

module.exports = User;
