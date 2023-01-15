// Require packages
const express = require('express');

const AdminService = require('../../services/admin/adminService');
const AdminAuthorization = require('../middleware/adminAuthorization');

const router = express.Router();

// Creating New Object
const service = new AdminService();

// Home Page
router.get('/', AdminAuthorization, service.Dashboard);

// Sign in Post
router.post('/auth/signin', service.SigninPost);

module.exports = router;
