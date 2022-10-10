const createCategories = require('../services/createCategories');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const categories = await createCategories(name);

    if (!categories) throw Error;

    res.status(201).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
