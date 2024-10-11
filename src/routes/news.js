const express = require('express')
const newsController = require('../app/Controller/NewsController');

const route = express.Router()

route.get('/id',newsController.show)

route.get('/',newsController.index)

module.exports = route;