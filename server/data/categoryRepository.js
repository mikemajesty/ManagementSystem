const Category = require('../model/Category');

const create = (data) => {
  Category.sequelize.sync().then(() => {
    return Category.Category.create(data);
  }).then( (data) => {
    console.log('entity was saved', data.get({
      plain: true
    }));
  });

};

const getAll = () => {
  return Category.Category.all();
}

const remove = (id) => {
  return Category.Category.destroy({ where: { id: id }});
}

const edit = (id) => {
    return Category.Category.all();
};

module.exports =  {
   create,
   getAll,
   remove,
   edit
};
