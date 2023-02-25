// Require packages
const express = require('express');

const ProjectWorkspaceService = require('../services/projectWorkspaceService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProjectWorkspaceService();

// Create ande remove new role
router
  .route('/roles')
  .post(userAuthorization, service.CreateProjectRolePost)
  .delete(userAuthorization, service.removeProjectRoleDelete);

// Create and remove new Contributors
router
  .route('/contributors')
  .post(userAuthorization, service.CreateProjectContributorPost)
  .delete(userAuthorization, service.removeProjectContributorDelete);

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
