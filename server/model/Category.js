const sequelize = require('../data/database').sequelize;
const Sequelize = require('../data/database').Sequelize;

const Category = sequelize.define('category', {
  name: Sequelize.STRING,
  descripition: Sequelize.STRING
});

module.exports = {
  Category,
  sequelize
}
