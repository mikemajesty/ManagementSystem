const repository = require('../data/categoryRepository');
const cat = require('../model/Category');

const findAll = (req, res) => {
   console.log('sera ', repository.getAll().then((value) => { return value}));
   res.json(repository.getAll().then(value => value));
}
const create = (req, res) => {
  repository.create({name: req.body.name || null, descripition: req.body.descripition || null})
  res.json(200);
};

module.exports = {
  findAll,
  create
}
