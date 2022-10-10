const { Users } = require('../models');

module.exports = async (id) => Users.findByPk(id);
