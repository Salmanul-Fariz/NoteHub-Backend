// Require packages
const express = require('express');

const ProjectWorkspaceService = require('../services/projectWorkspaceService');
const userAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new ProjectWorkspaceService();

// Check is admin
router.get('/access/admin', userAuthorization, service.CheckUserIsAdminProject);

// Check is contributor acces
router.get(
  '/access/contributors',
  userAuthorization,
  service.CheckContributorRoleAccessProject
);

router.get('/access', userAuthorization, service.CheckUserAccessProject);

// Create ande remove new role
router
  .route('/roles')
  .post(userAuthorization, service.CreateProjectRolePost)
  .delete(userAuthorization, service.removeProjectRoleDelete);

// Create and delete task
router
  .route('/tasks')
  .post(userAuthorization, service.CreateProjectTaskPost)
  .patch(userAuthorization, service.UpdateProjectTaskPatch)
  .delete(userAuthorization, service.RemoveProjectTaskDelete);

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
  .post(userAuthorization, service.CreateProjectWorkspacePost)
  .delete(userAuthorization, service.RemoveProjectDelete);

module.exports = router;
