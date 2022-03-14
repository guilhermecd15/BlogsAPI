const isValidUser = require('../middlewares/validateUser');
const isValidPost = require('../middlewares/validatePost');
const isValidPostUpdate = require('../middlewares/validatePostUpdate');
const createUsers = require('../controllers/createUser');
const getUser = require('../controllers/getUser');
const getPosts = require('../controllers/getPosts');
const getPostsById = require('../controllers/getPostsById');
const getUserById = require('../controllers/getUserById');
const login = require('../controllers/login');
const createCategories = require('../controllers/createCategories');
const getCategories = require('../controllers/getCategories');
const createposts = require('../controllers/createPost');
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const deleteUser = require('../controllers/deleteUser');

module.exports = {
  createUsers,
  isValidUser,
  login,
  getUser,
  getUserById,
  createCategories,
  getCategories,
  createposts,
  isValidPost,
  getPosts,
  getPostsById,
  updatePost,
  isValidPostUpdate,
  deletePost,
  deleteUser,
};
