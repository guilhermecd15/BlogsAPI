const { BlogPosts } = require('../models');

module.exports = async (decoded, id) => {
  const idUser = decoded.data.id.toString();

  const post = await BlogPosts.findOne({
    where: { id },
  });

  if (!post) return null;

  if (idUser !== id) return 'Unauthorized user';

  return BlogPosts.destroy(
    { where: { id } },
  );
};
