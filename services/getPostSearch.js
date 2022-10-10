const { Op } = require('sequelize');
const { BlogPosts, Users, Categories } = require('../models');

module.exports = async (query) => BlogPosts.findAll({
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
