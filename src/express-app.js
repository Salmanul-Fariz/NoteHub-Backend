const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const { SESSION_SECRET_KEY } = require('./config');

// User Router
const authRouter = require('./api/user/authRouter');
const userRouter = require('./api/user/userRouter');

// Admin Router
const adminRouter = require('./api/admin/adminRouter');

module.exports = async (app) => {
  // Session Setting
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: SESSION_SECRET_KEY,
    })
  );

  // Passport Setting
  app.use(passport.initialize());
  app.use(passport.session());

  // To persist user data
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  // To maintain a login session
  passport.deserializeUser((obj, done) => {
    done(null, false);
  });

  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // Admin API's
  app.use('/api/admin', adminRouter);

  // User API's
  app.use('/api/auth', authRouter);
  app.use('/api/admin', authRouter);
  app.use('/api', userRouter);
};
