// Require packages
const express = require('express');
const cors = require('cors');

// Require functions
const { userRouter } = require('./api');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // API's
  app.use('/', userRouter);
};
