const { Categories } = require('../models');

module.exports = async (name) => Categories.create({ name });
