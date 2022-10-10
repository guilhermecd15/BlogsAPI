const { Categories } = require('../models');

module.exports = async () => Categories.findAll();
