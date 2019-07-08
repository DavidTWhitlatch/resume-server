const express = require('express');

const resumeRouter = express.Router();

resumeRouter.route('/')

  .get( ( req, res, next ) => {
    try{
    res.send('OK')
    } catch (e) {
      next(e)
    }
  })

module.exports = resumeRouter;
