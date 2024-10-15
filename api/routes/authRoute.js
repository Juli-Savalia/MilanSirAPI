const express = require('express');
const { registerUser,login } = require('../controllers/AuthController');

const routes = express.Router();

routes.post('/registerUser',registerUser);
routes.post('/login',login);

module.exports = routes;