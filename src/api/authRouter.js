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

    // Create a new user
    const data = await service.userSignup({ userName, email, password });

    return res.status(data.statusCode).json({
      status: data.status,
      data: data.result,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
