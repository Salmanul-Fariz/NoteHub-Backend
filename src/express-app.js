const express = require('express');
const cors = require('cors');

// User Router
const authRouter = require('./api/user/authRouter');
const userRouter = require('./api/user/userRouter');
const userWorspaceRouter = require('./api/user/userWorspaceRouter');
const projectWorkspaceRouter = require('./api/user/projectWorkspaceRouter');
const s3Router = require('./api/user/s3Router');

// Admin Router
const adminRouter = require('./api/admin/adminRouter');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // Admin API's
  app.use('/api/admin', adminRouter);

  // User API's
  app.use('/api/workspaces/user-workspace', userWorspaceRouter);
  app.use('/api/workspaces/project-workspace', projectWorkspaceRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/s3', s3Router);
  app.use('/api', userRouter);
};
