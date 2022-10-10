const getCategories = require('../services/getCategories');

module.exports = async (req, res) => {
  try {
    const categories = await getCategories();

    if (!categories) throw Error;

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
