const { Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const categories = await Categories.findAll();

    if (!categories) throw Error;

    res.status(200).json(categories);
  } catch (err) {
    res
      .status(500).json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
