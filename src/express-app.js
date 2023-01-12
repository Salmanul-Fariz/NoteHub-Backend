const express = require('express');
const cors = require('cors');

// user side
const authRouter = require('./api/user/authRouter');
const userRouter = require('./api/user/userRouter');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // API's
  app.use('/api', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/admin', authRouter);
};
