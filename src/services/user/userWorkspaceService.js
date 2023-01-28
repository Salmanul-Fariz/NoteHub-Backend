const UserWorkspaceRepository = require('../../database/repository/user/userWorkspaceRepository');

const repository = new UserWorkspaceRepository();

class UserWorkspaceService {
  // View Work Space Page
  async UserWorkspaceGet(req, res) {
    try {
      const userId = req.user;
      const data = await repository.UserWorkspace(userId);

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace icon
  async UserWorkspaceIconPatch(req, res) {
    try {
      const data = await repository.UpdateWorkspaceIcon(req.body, req.user);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace name
  async UserWorkspaceNamePatch(req, res) {
    try {
      const data = await repository.UpdateWorkspaceName(req.body, req.user);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Create a user workspace
  async UserWorkspacePost(req, res) {
    try {
      const data = await repository.CreateUserWorkspace(req.user);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace page icon
  async UserWorkspacePageIconPatch(req, res) {
    try {
      const { pageId, iconName } = req.body;
      const data = await repository.UpdateWorkspacePageIcon({
        pageId,
        iconName,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace page name
  async UserWorkspacePageNamePatch(req, res) {
    try {
      const { pageId, pageName } = req.body;
      const data = await repository.UpdateWorkspacePageName({
        pageId,
        pageName,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace page cover image
  async UserWorkspaceCoverImagePatch(req, res) {
    try {
      const { pageId, imageUrl } = req.body;
      const data = await repository.UpdateWorkspaceCoverImage({
        pageId,
        imageUrl,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace page cover image position
  async UserWorkspaceCoverPositionPatch(req, res) {
    try {
      const { pageId, positionY } = req.body;
      const data = await repository.UpdateWorkspaceCoverPosition({
        pageId,
        positionY,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserWorkspaceService;
