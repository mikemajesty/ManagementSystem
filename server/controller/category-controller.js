const repository = require('../data/categoryRepository');

const findAll = (req, res) => {
  repository.getAll().then((data) => {
    res.json(data);
  });
}

const create = (req, res) => {
  repository.create({name: req.body.name || null, descripition: req.body.descripition || null})
  res.json(200);
};

const remove = (req, res) => {
 repository.remove(req.body.id).then((data) => {
   if (data) {
     repository.getAll().then((data) => {
       res.json(data);
     });
   }
 });
};

const edit = (req, res) => {
  const data = {
    id: req.body.id || 0,
    name: req.body.name || null,
    descripition: req.body.descripition || null
  };

  repository.edit(data).then((data) => {

  });
};

const getBy = (req, res) => {
  return repository.getBy(req.body.id);
};

module.exports = {
  findAll,
  create,
  remove,
  edit,
  getBy
}
