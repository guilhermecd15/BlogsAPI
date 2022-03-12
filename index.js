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

app.post('/user', routes.isValid, routes.createUsers);
app.post('/login', routes.login);
app.get('/user', validateJWT, routes.getUser);
app.get('/user/:id', validateJWT, routes.getUserById);
// app.post('/categories', routes.createCategories);

// token Hamilton
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaW1hZ2UiOiJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMTgvTGV3aXNfSGFtaWx0b25fMjAxNl9NYWxheXNpYV8yLmpwZyJ9LCJpYXQiOjE2NDcwNDM2NjgsImV4cCI6MTY0NzY0ODQ2OH0.ZMjLcMlyfw5E-EKndK7M26xSqUOg-uCGqa5AX7Asx1c