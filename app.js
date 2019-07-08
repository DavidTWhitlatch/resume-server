const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const resumeRouter = require('./resumeRouter');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', resumeRouter);

app.use((e, req, res, next) => {
  if (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});


module.exports = app;

