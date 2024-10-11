const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes')
const db = require('./config/db');

db.connect()

const app = express()

const port = 8888

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})