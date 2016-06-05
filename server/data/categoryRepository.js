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

const edit = (category) => {
    return Category.Category.find(category.id)
      .then((data) => {
        data.updateAttributes({
          name: category.name,
          descripition: category.descripition
        }).then((data) => {
            console.log('was update:', data);
        }).catch((err) => {
          console.log('error:', err);
        });
      });
};

const getBy = (id) => {
  return Category.Category.find({id: id});

};

module.exports =  {
   create,
   getAll,
   remove,
   edit,
   getBy
};
