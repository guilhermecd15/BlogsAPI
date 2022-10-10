const getPosts = require('../services/getPosts');

module.exports = async (req, res) => {
  try {
    const posts = getPosts();
    
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
