const { BlogPosts, Users, Categories } = require('../models');

module.exports = async (id) => BlogPosts.findOne({
  where: { id },
  include: [
    { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
  ],
});
