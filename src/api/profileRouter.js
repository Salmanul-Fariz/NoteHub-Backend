// Require packages
const express = require('express');

const ProfileService = require('../services/profileService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProfileService();

// Update the profile image
router.patch('/image', userAuthorization, service.ProfileImageUpdate);

// Update the profile name
router.patch('/name', userAuthorization, service.ProfileNameUpdate);

// Update the profile User name
router.patch('/username', userAuthorization, service.ProfileUserNameUpdate);

// Get the data of pages in profile
router.get('/pages', userAuthorization, service.ProfilePagesDetails);

// Home Page
router.get('/', userAuthorization, service.ProfileUserDetails);

module.exports = router;
