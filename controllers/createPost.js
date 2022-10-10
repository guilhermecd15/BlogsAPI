const createPost = require('../services/createPost');

module.exports = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    const post = createPost(title, content, categoryIds, token);

    if (post === null) {
        return res.status(400).json({ message: '"categoryIds" not found' });
      }

    if (!post) throw Error;

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
