const express = require('express')
const siteController = require('../app/Controller/SiteController');

const route = express.Router()

route.get('/',siteController.index)

module.exports = route;