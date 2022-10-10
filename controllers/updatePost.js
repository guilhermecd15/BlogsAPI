const jwt = require('jsonwebtoken');
const updatePost = require('../services/updatePost');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;

    if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

    const decoded = jwt.verify(req.headers.authorization, secret);
    const id = decoded.data.id.toString();

    if (id !== req.params.id) return res.status(401).json({ message: 'Unauthorized user' });

    const postUpdate = updatePost(title, content, id);

    res.status(200).json(postUpdate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
