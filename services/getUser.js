const { Users } = require('../models');

module.exports = async () => Users.findAll();
