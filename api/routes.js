const createUsers = require('../controllers/createUser');
const createCategories = require('../controllers/createCategories');
const login = require('../controllers/login');
const getUser = require('../controllers/getUser');
const getUserById = require('../controllers/getUserById');
const isValid = require('../controllers/validate');

module.exports = {
  createUsers,
  isValid,
  login,
  getUser,
  getUserById,
  createCategories,
};
