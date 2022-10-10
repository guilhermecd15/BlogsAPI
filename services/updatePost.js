const { BlogPosts, Categories } = require('../models');

module.exports = async (title, content, id) => {
  await BlogPosts.update(
    { title, content },
    { where: { id } },
  );

  return BlogPosts.findOne({
    where: { id },
    include: { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
  });
};
