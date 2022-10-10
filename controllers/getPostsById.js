const getPostsById = require('../services/getPostsById');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const post = getPostsById(id);
      if (!post) return res.status(404).json({ message: 'Post does not exist' });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
