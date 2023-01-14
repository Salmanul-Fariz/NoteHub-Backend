const express = require('express');
const passport = require('passport');

const AuthenticationService = require('../../services/user/authService');
const googleSigninConfig = require('../../utils/googleSigninConfig');

googleSigninConfig();

const router = express.Router();

// Creating New Object
const service = new AuthenticationService();

// View page of Signup
router.get(service.UserSignupGet);

// Register user Signup
router.post('/signup', service.UserSignupPost);

// Verification Email
router.get('/verify', service.EmailValidationGet);

// Check Email Verification completed
router.post('/checkVerify', service.CheckVerifyMailPost);

// View Signin page
router.get('/signin', service.UserSigninGet);

// Signin user
router.post('/signin', service.UserSigninPost);

// Google Signin
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

module.exports = router;
