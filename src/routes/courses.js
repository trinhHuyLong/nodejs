const express = require('express')
const courseController = require('../app/Controller/CourseController');

const route = express.Router()

route.get('/create', courseController.createCourse)
route.post('/store', courseController.store)
route.get('/:slug',courseController.show)

module.exports = route;