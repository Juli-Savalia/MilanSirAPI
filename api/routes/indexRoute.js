const express = require('express');

const routes = express.Router();

const { verifyToken } = require('../middleware/Auth');

routes.use('/auth',require('./authRoute'));
routes.use('/category',verifyToken,require('./categoryRoute'));


module.exports = routes;