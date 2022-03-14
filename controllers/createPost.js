const jwt = require('jsonwebtoken');
const { BlogPosts, Categories } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    let hasCategories = categoryIds.map((c) => Categories.findByPk(c));
    hasCategories = await Promise.all(hasCategories).then((v) => v);
    for (let i = 0; i < hasCategories.length; i += 1) {
      if (hasCategories[i] === null) {
        return res.status(400).json({ message: '"categoryIds" not found' });
      }
    }

    const decoded = jwt.verify(token, secret);
    const { id } = decoded.data;

    const post = await BlogPosts.create({ title, content, userId: id });

    if (!post) throw Error;

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
