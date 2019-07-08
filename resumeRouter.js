const express = require('express');

const puzzleFunc = require('./puzzleFunc')

const resumeRouter = express.Router();

resumeRouter.route('/')

  .get( ( req, res, next ) => {
    try{
      switch(req.query.q) {
        case 'Phone':
          res.send('678-451-8485');
          break;
        case 'Name':
          res.send('David Thomas Whitlatch');
          break;
        case 'Email Address':
          res.send('davidtwhitlatch@gmail.com');
          break;
        case 'Referrer':
          res.send('Dan Bogdan');
          break;
        case 'Source':
          res.send('https://github.com/DavidTWhitlatch/resume-server.git');
          break;
        case 'Resume':
          res.send('PLACE_HOLDER');
          break;
        case 'Degree':
          res.send('General Assembly Web Developer Immersive Certification');
          break;
        case 'Status':
          res.send('Yes');
          break;
        case 'Position':
          res.send('Web Developer');
          break;
        case 'Years':
          res.send('1');
          break;
        case 'Puzzle':
          const answer = puzzleFunc(req.query.d);
          res.send(answer);
          break;
        default:
          res.send('OK');
          break;
      }
    } catch (e) {
      next(e)
    }
  })

module.exports = resumeRouter;
