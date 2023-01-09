// Require packages
const express = require('express');

// Require functions
const router = express.Router();
const AuthenticationService = require('../services/authService');

// Creating New Object
const service = new AuthenticationService();

// View page of Signup
router.get('/signup', (req, res) => {
  try {
    res.status(200).json({
      status: 'Success',
      message: 'View Signup Page',
    });
  } catch (err) {
    console.log(err);
  }
});

// Register user Signup
router.post('/signup', async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    let data;

    if (req.query.userNameExist) {
      // Check username exist
      data = await service.UsernameExist(req.query.userNameExist);
    } else {
      // Create a new user
      data = await service.UserSignup(
        { userName, email, password },
        req.headers.host
      );
    }

    return res.status(data.statusCode).json({
      status: data.status,
      data: data.result,
    });
  } catch (err) {
    console.log(err);
  }
});

// Verification Email
router.get('/verify', async (req, res) => {
  try {
    const token = req.query.token;
    const data = await service.EmailValidation(token);

    return res.status(data.statusCode).json({
      status: data.status,
      data: data.result,
    });
  } catch (err) {
    console.log(err);
  }
});

// Check Email Verification completed
router.post('/checkVerify', async (req, res) => {
  try {
    const data = await service.CheckVerifyMail(req.body.jwt);

    return res.status(data.statusCode).json({
      status: data.status,
      data: data.result,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
