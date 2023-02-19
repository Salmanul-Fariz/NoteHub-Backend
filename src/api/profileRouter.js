// Require packages
const express = require('express');

const ProfileService = require('../services/profileService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProfileService();

// Home Page
router.get('/', userAuthorization, service.ProfileUserDetails);

// Update the profile  image
router.patch('/image', userAuthorization, service.ProfileImageUpdate);

module.exports = router;
