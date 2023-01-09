const express = require('express');
const cors = require('cors');

const { userRouter, authRouter } = require('./api');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // API's
  app.use('/api', userRouter);
  app.use('/api/auth', authRouter);
};
