const express = require('express');

const resumeRouter = express.Router();

resumeRouter.route('/')

  .get( (req, res) => {
    res.send('OK')
  })

module.exports = resumeRouter;
