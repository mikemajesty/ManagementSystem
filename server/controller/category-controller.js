const repository = require('../data/categoryRepository');

const findAll = (req, res) => {
  repository.getAll().then((value) => {
    res.json(value);
  });
}
const create = (req, res) => {
  repository.create({name: req.body.name || null, descripition: req.body.descripition || null})
  res.json(200);
};

module.exports = {
  findAll,
  create
}
