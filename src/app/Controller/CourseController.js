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
        .then(() => res.redirect(`/courses/${formData.slug}`))
    }
    edit(req, res, next) {
      Course.findOne({_id: req.params.id}).lean()
        .then(course => {
          res.render('courses/edit',{course})
        })
        .catch(next)
    }
    update(req, res, next) {
      Course.updateOne({_id: req.params.id},req.body)
        .then(res.redirect('/me/stored/courses'))
        .catch(next)
    }

    delete(req, res, next) {
      Course.deleteOne({_id: req.params.id})
        .then(res.redirect('back'))
        .catch(next)
    }
}

module.exports = new CourseController;