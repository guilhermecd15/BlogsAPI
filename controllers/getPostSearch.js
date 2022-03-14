const { Op } = require('sequelize');
const { BlogPosts, Users, Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const query = `%${req.query.q}%`;

    // Op.like e Op.or pego no https://sequelize.org/master/manual/model-querying-basics.html
    const post = await BlogPosts.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: query } },
          { content: { [Op.like]: query } },
        ],
      },
      include: [
        { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
        { model: Users, as: 'user', attributes: { exclude: ['password'] } }],
    });

    if (!post) return res.status(200).json([]);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
