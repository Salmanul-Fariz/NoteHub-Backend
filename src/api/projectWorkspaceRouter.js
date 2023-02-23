// Require packages
const express = require('express');

const ProjectWorkspaceService = require('../services/projectWorkspaceService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProjectWorkspaceService();

// Create a new role
router.post('/roles', userAuthorization, service.CreateProjectRolePost);

// Prject Space Name
router.patch('/name', userAuthorization, service.ProjectWorkspaceNamePatch);

// Get a board details
router.get('/boards/:id', userAuthorization, service.ProjectWorkspaceBoardGet);

// View project workspace
router
  .route('/')
  .get(userAuthorization, service.ProjectWorkspaceGet)
  .post(userAuthorization, service.CreateProjectWorkspacePost);

module.exports = router;
