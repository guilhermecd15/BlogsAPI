const jwt = require('jsonwebtoken');
const { BlogPosts } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, secret);
    const id = decoded.data.id.toString();

    const post = await BlogPosts.findOne({
      where: { id: req.params.id },
    });

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    if (id !== req.params.id) return res.status(401).json({ message: 'Unauthorized user' });

    await BlogPosts.destroy(
      { where: { id: req.params.id } },
    );

    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
