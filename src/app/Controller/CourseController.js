const { response } = require('express');
const Course = require('../models/Course');

class CourseController {
    show(req, res) {
        async function getCourses() {
            try {
              const courses = await Course.findOne({slug:req.params.slug}).lean();
              res.render('courses/show', { courses });
            } catch (err) {
              next(err);
            }
          }
          
        getCourses()
    }
    createCourse(req, res, next) {
      res.render('courses/create')
    }
    async store(req, res, next) {
      const formData = req.body
      formData.image = `https://i.ytimg.com/vi/${req.body.vd}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuqncXSnR8IZj8V3FuwhvaG254bw`
      const course = new Course(formData)
      await course.save()
      res.send('updated course')
    }
}

module.exports = new CourseController;