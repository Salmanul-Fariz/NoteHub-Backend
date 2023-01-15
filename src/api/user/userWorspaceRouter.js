const express = require('express');

const UserWorkspaceService = require('../../services/user/userWorkspaceService');
const UserAuthorization = require('../middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new UserWorkspaceService();

// View User workspace
router.get('/', UserAuthorization, service.UserWorkspaceGet);

module.exports = router;
