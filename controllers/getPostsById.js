const { BlogPosts, Users, Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      ] });

      if (!post) return res.status(404).json({ message: 'Post does not exist' });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
