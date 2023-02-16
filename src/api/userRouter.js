// Require packages
const express = require('express');

const emailVerify = require('./middleware/emailVerify');
const UserService = require('../services/userService');

const router = express.Router();

// Creating New Object
const service = new UserService();

// Home Page
router.get('/', emailVerify, service.HomePage);

module.exports = router;
