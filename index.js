require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const validateJWT = require('./api/validateJWT');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', validateJWT, routes.getUser);
app.get('/user/:id', validateJWT, routes.getUserById);
app.post('/user', routes.isValidUser, routes.createUsers);
app.post('/login', routes.login);
app.get('/categories', validateJWT, routes.getCategories);
app.get('/post', validateJWT, routes.getPosts);
app.get('/post/search', validateJWT, routes.getPostSearch);
app.get('/post/:id', validateJWT, routes.getPostsById);
app.post('/categories', validateJWT, routes.createCategories);
app.post('/post', validateJWT, routes.isValidPost, routes.createposts);
app.put('/post/:id', validateJWT, routes.isValidPostUpdate, routes.updatePost);
app.delete('/post/:id', validateJWT, routes.deletePost);
app.delete('/user/me', validateJWT, routes.deleteUser);
