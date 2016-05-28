const repository = require('../data/categoryRepository');

const getCategory = (req, res) => {
  const data = {
    name: 'Mike Rodrigues De Lima',
    age: 27,
    city: 'Ibiúna',
    state: 'São Paulo',
    country: 'Brasil'
  }
  res.json(data);
}
const create = (req, res) => {
  repository.create({name: req.body.name || null, descripition: req.body.descripition || null})
};

module.exports = {
  getCategory,
  create
}
