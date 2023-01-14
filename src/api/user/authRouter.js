const express = require('express');

const AuthenticationService = require('../../services/user/authService');

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
router.post('/google', service.SigninWithGoogle);

module.exports = router;
