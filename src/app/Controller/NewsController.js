const Course = require('../models/Course');

class NewsController {
    index(req,res,next) {
        // async function getCourses() {
        //     try {
        //       const courses = await Course.find({});
        //       res.json(courses);
        //     } catch (err) {
        //       next(err);
        //     }
        //   }
          
        //   getCourses()
        res.render('news')
    }

    show(req, res) {
        res.send('hello world')
    }
}

module.exports = new NewsController;