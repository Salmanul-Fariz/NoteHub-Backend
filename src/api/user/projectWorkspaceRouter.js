// Require packages
const express = require('express');

const ProjectWorkspaceService = require('../../services/user/projectWorkspaceService');
const userAuthorization = require('../middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProjectWorkspaceService();

// Prject Space Name
router.patch('/name', userAuthorization, service.ProjectWorkspaceNamePatch);
// View project workspace
router.get('/', userAuthorization, service.ProjectWorkspaceGet);

module.exports = router;
