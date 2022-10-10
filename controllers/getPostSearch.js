const getPostSearch = require('../services/getPostSearch');

module.exports = async (req, res) => {
  try {
    const query = `%${req.query.q}%`;

    const post = await getPostSearch(query);

    if (!post) return res.status(200).json([]);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
