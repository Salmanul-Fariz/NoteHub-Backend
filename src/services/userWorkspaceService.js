const UserWorkspaceRepository = require('../database/repository/userWorkspaceRepository');

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

  // Get the data of Work Space Page
  async UserWorkspacePageGet(req, res) {
    try {
      const { id } = req.params;
      const data = await repository.UserWorkspacePage({ id });

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

  // Update the workspace Section type
  async UserWorkspaceSecTypePatch(req, res) {
    try {
      const { pageId, pageSectionId, pageType } = req.body;
      const data = await repository.UpdateWorkspaceSecType({
        pageId,
        pageSectionId,
        pageType,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace Section content
  async UserWorkspaceSecContentPatch(req, res) {
    try {
      const { pageId, pageSectionId, pageContent } = req.body;
      const data = await repository.UpdateWorkspaceSecContent({
        pageId,
        pageSectionId,
        pageContent,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Add the workspace Section content
  async UserWorkspaceSecAddPatch(req, res) {
    try {
      const { pageId, pageSectionId, pageContent, pageType } = req.body;
      const { type } = req.query;
      const data = await repository.UpdateWorkspaceSecAdd(
        {
          pageId,
          pageSectionId,
          pageContent,
          pageType,
        },
        type
      );
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the workspace Section toggle option
  async UserWorkspaceSecToggleOptionPatch(req, res) {
    try {
      const { pageId, pageSectionId, isToggle } = req.body;
      const data = await repository.UpdateWorkspaceSecToggleOption({
        pageId,
        pageSectionId,
        isToggle,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // upload image in a user workspace section
  async UserWorkspaceSecImagePost(req, res) {
    try {
      const { pageId, pageSectionId, imageUrl } = req.body;
      const data = await repository.UpdateWorkspaceSecImageType({
        pageId,
        pageSectionId,
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

  // update image in a user workspace section size
  async UserWorkspaceSecImageSizePatch(req, res) {
    try {
      const { pageId, pageSectionId, imgSize } = req.body;
      const data = await repository.UpdateWorkspaceSecImageSizeType({
        pageId,
        pageSectionId,
        imgSize,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Delete a user workspace page
  async UserWorkspacePageDelete(req, res) {
    try {
      const { pageId } = req.query;
      const data = await repository.DeleteUserWorkspacePage({
        user: req.user,
        pageId,
      });
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Check the user Can acces to page
  async CheckUserAccessSpace(req, res) {
    try {
      const userId = req.user;
      const { pageId } = req.query;
      const data = await repository.CheckUserAccessPage({
        pageId,
        userId,
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
