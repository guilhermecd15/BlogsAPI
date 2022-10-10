const isValidUser = require('../middlewares/validateUser');
const isValidPost = require('../middlewares/validatePost');
const isValidPostUpdate = require('../middlewares/validatePostUpdate');
const isValidLogin = require('../middlewares/validateLogin');
const login = require('../controllers/login');
const getUser = require('../controllers/getUser');
const getUserById = require('../controllers/getUserById');
const createUsers = require('../controllers/createUser');
const deleteUser = require('../controllers/deleteUser');
const getPosts = require('../controllers/getPosts');
const getPostsById = require('../controllers/getPostsById');
const getPostSearch = require('../controllers/getPostSearch.js');
const createposts = require('../controllers/createPost');
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const getCategories = require('../controllers/getCategories');
const createCategories = require('../controllers/createCategories');

module.exports = {
  isValidUser,
  isValidPost,
  isValidPostUpdate,
  isValidLogin,
  login,
  getUser,
  getUserById,
  createUsers,
  deleteUser,
  getPosts,
  getPostsById,
  getPostSearch,
  createposts,
  updatePost,
  deletePost,
  getCategories,
  createCategories,
};
