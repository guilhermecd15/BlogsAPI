const jwt = require('jsonwebtoken');
const { BlogPosts, Categories } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (title, content, categoryIds, token) => {
  let hasCategories = categoryIds.map((c) => Categories.findByPk(c));
  hasCategories = await Promise.all(hasCategories).then((v) => v);
  for (let i = 0; i < hasCategories.length; i += 1) {
    if (hasCategories[i] === null) {
      return null;
    }
  }

  const decoded = jwt.verify(token, secret);
  const { id } = decoded.data;

  return BlogPosts.create({ title, content, userId: id });
};
