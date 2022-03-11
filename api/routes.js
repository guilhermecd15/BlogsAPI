const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const isValid = require('../controllers/validate');

module.exports = {
  createUsers,
  isValid,
  login,
};
