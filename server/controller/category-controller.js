module.exports.getCategory = (req, res) => {
  const data = {
    name: 'Mike Rodrigues De Lima',
    age: 27,
    city: 'Ibiúna',
    state: 'São Paulo',
    country: 'Brasil'
  }
  res.json(data);
}
