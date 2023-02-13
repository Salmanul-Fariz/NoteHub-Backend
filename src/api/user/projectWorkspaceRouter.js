// Require packages
const express = require('express');

const ProjectWorkspaceService = require('../../services/user/projectWorkspaceService');
const userAuthorization = require('../middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProjectWorkspaceService();

// Prject Space Name
router.patch('/name', userAuthorization, service.ProjectWorkspaceNamePatch);

// Get a board details
router.get('/board/:id', userAuthorization, service.ProjectWorkspaceBoardGet);

// View project workspace
router
  .route('/')
  .get(userAuthorization, service.ProjectWorkspaceGet)
  .post(userAuthorization, service.CreateProjectWorkspacePost);

module.exports = router;
