const { BlogPosts, Users, Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const posts = await BlogPosts.findAll({
      include: [
        { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      ] });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
