const ProjectWorkspaceRepository = require('../database/repository/projectWorkspaceRepository');

const repository = new ProjectWorkspaceRepository();

class ProjectWorkspaceService {
  // View project Work Space Page
  async ProjectWorkspaceGet(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProjectWorkspace(userId);

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Update the Project workspace name
  async ProjectWorkspaceNamePatch(req, res) {
    try {
      const data = await repository.UpdateProjectWorkspaceName(
        req.body,
        req.user
      );
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Add new Project workspace
  async CreateProjectWorkspacePost(req, res) {
    try {
      const data = await repository.CreateProjectWorkspace(req.body, req.user);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Get a board details
  async ProjectWorkspaceBoardGet(req, res) {
    try {
      const paramsId = req.params.id;
      const userId = req.user;
      const data = await repository.ProjectWorkspaceBoardDetails(
        paramsId,
        userId
      );

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Create new Project new roles
  async CreateProjectRolePost(req, res) {
    try {
      const data = await repository.CreateProjectRole(req.body);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Create new Project contributor
  async CreateProjectContributorPost(req, res) {
    try {
      const data = await repository.CreateProjectContributor(req.body);
      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Remove Project contributor
  async removeProjectContributorDelete(req, res) {
    try {
      const { projectId, userId } = req.query;

      const data = await repository.RemoveProjectContributor({
        projectId,
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

module.exports = ProjectWorkspaceService;
