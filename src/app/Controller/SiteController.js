const Course = require('../models/Course');

class siteController {
    index(req,res,next) {
        async function getCourses() {
            try {
              const courses = await Course.find({}).lean();
              res.render('home', { courses });
            } catch (err) {
              next(err);
            }
          }
          
          getCourses()
    }

    seatch(req, res) {
        res.send('search')
    }
}

module.exports = new siteController;