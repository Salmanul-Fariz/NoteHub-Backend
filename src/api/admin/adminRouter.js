// Require packages
const express = require('express');

const AdminService = require('../../services/admin/adminService');
const checkAdminSignin = require('../middleware/checkAdminSignin');

const router = express.Router();

// Creating New Object
const service = new AdminService();

// Home Page
router.get('/', checkAdminSignin, service.Dashboard);

module.exports = router;
