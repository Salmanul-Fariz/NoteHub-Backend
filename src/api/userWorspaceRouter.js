const express = require('express');

const UserWorkspaceService = require('../services/userWorkspaceService');
const userAuthorization = require('./middleware/userAuthorization');
const UserAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new UserWorkspaceService();

// router// Update workspace page type
router.patch(
  '/page/type',
  UserAuthorization,
  service.UserWorkspaceSecTypePatch
);

// Update workspace Section toggle option
router.patch(
  '/page/toggle',
  UserAuthorization,
  service.UserWorkspaceSecToggleOptionPatch
);

// upload image in a section
// update image in a section
router
  .route('/page/section-image')
  .post(UserAuthorization, service.UserWorkspaceSecImagePost)
  .patch(UserAuthorization, service.UserWorkspaceSecImageSizePatch);

// Update workspace page content
// Add workspace page content new Section
router
  .route('/page/content')
  .patch(UserAuthorization, service.UserWorkspaceSecContentPatch)
  .post(UserAuthorization, service.UserWorkspaceSecAddPatch);

// check acces to user
router.get('/access', userAuthorization, service.CheckUserAccessSpace);

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
// Delete a user workspace page
// View User workspace
router
  .route('/')
  .get(UserAuthorization, service.UserWorkspaceGet)
  .post(UserAuthorization, service.UserWorkspacePost)
  .delete(UserAuthorization, service.UserWorkspacePageDelete);

router.get('/:id', UserAuthorization, service.UserWorkspacePageGet);

module.exports = router;
