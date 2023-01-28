const express = require('express');

const UserWorkspaceService = require('../../services/user/userWorkspaceService');
const UserAuthorization = require('../middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new UserWorkspaceService();

// update workspace icon
router.patch('/icon', UserAuthorization, service.UserWorkspaceIconPatch);

// Update workspace name
router.patch('/name', UserAuthorization, service.UserWorkspaceNamePatch);

// Update workspace page icon
router.patch(
  '/page-icon',
  UserAuthorization,
  service.UserWorkspacePageIconPatch
);

// Update workspace Page name
router.patch(
  '/page-name',
  UserAuthorization,
  service.UserWorkspacePageNamePatch
);

// Update workspace Page cover
router.patch(
  '/cover-image',
  UserAuthorization,
  service.UserWorkspaceCoverImagePatch
);

// Update workspace Page cover Position
router.patch(
  '/cover-position',
  UserAuthorization,
  service.UserWorkspaceCoverPositionPatch
);

// Create a user workspace
// View User workspace
router
  .route('/')
  .get(UserAuthorization, service.UserWorkspaceGet)
  .post(UserAuthorization, service.UserWorkspacePost);

module.exports = router;
