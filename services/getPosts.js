const { BlogPosts, Users, Categories } = require('../models');

module.exports = async () => BlogPosts.findAll({
      include: [
        { model: Categories, as: 'categories', attributes: { exclude: ['postcategories'] } },
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      ],
    });
