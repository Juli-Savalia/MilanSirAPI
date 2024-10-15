const express = require('express');

const routes = express.Router();

const { addcategory,viewcategory } = require('../controllers/CategoryController');


routes.post('/add',addcategory)
routes.get('/view',viewcategory)

module.exports = routes;