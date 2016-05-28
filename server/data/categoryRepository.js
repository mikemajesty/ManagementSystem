const Category = require('../model/Category');

const create = (data) => {
    console.log('QUASE CERTO');
  Category.sequelize.sync().then(() => {
    return Category.Category.create(data);
  }).then( (data) => {
    console.log('entity was saved', data.get({
      plain: true
    }));
  });

};

module.exports =  {
   create
};
