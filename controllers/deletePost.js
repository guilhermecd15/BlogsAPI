const jwt = require('jsonwebtoken');
const deletePost = require('../services/deletePost');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, secret);

    const post = deletePost(decoded, req.params.id);

    if (post === null) return res.status(404).json({ message: 'Post does not exist' });

    if (post === 'Unauthorized user') return res.status(401).json({ message: 'Unauthorized user' });

    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
