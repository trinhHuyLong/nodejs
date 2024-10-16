const Course = require('../models/Course');

class MeController {
    storeCourses(req, res, next) {
      Course.find({}).lean()
        .then(function (courses) {
          res.render('me/storedCourses',{courses});
        })
    }
}

module.exports = new MeController;