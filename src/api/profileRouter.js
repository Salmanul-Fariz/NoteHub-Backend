// Require packages
const express = require('express');

const ProfileService = require('../services/profileService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProfileService();

// Home Page
router.get('/', userAuthorization, service.ProfileUserDetails);

module.exports = router;
