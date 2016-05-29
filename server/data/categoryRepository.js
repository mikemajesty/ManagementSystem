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
  return Category.Category.findOne()
    .then((data) => {
      console.log('era pra dar: ', data.get());
        return data.get();
      }).catch((err) => { return err});
  }

module.exports =  {
   create,
   getAll
};
