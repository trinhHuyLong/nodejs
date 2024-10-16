const express = require('express')
const meController = require('../app/Controller/MeController');

const route = express.Router()

route.get('/stored/courses', meController.storeCourses)

module.exports = route;