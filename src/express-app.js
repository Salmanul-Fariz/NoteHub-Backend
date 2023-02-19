const express = require('express');
const cors = require('cors');

// Router
const authRouter = require('./api/authRouter');
const userRouter = require('./api/userRouter');
const userWorspaceRouter = require('./api/userWorspaceRouter');
const projectWorkspaceRouter = require('./api/projectWorkspaceRouter');
const s3Router = require('./api/s3Router');
const profileRouter = require('./api/profileRouter');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // API's
  app.use('/api/workspaces/user-workspace', userWorspaceRouter);
  app.use('/api/workspaces/project-workspace', projectWorkspaceRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/profile', profileRouter);
  app.use('/api/s3', s3Router);
  app.use('/api', userRouter);
};
