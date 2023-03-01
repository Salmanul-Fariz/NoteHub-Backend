const ProjectWorkspaceRepository = require('../database/repository/projectWorkspaceRepository');
const { resDataFormatError } = require('../utils/databaseErrResponse');

const repository = new ProjectWorkspaceRepository();

class ProjectWorkspaceService {
  // View project Work Space Page
  async ProjectWorkspaceGet(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProjectWorkspace(userId);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Update the Project workspace name
  async ProjectWorkspaceNamePatch(req, res) {
    try {
      const data = await repository.UpdateProjectWorkspaceName(
        req.body,
        req.user
      );

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Add new Project workspace
  async CreateProjectWorkspacePost(req, res) {
    try {
      const data = await repository.CreateProjectWorkspace(req.body, req.user);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
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

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Create new Project new roles
  async CreateProjectRolePost(req, res) {
    try {
      const data = await repository.CreateProjectRole(req.body);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Create new Project contributor
  async CreateProjectContributorPost(req, res) {
    try {
      const data = await repository.CreateProjectContributor(req.body);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
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

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Remove Project roles
  async removeProjectRoleDelete(req, res) {
    try {
      const { projectId, roleName } = req.query;

      const data = await repository.RemoveProjectRole({
        projectId,
        roleName,
      });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Create new Project Task
  async CreateProjectTaskPost(req, res) {
    try {
      const data = await repository.CreateProjectTask(req.body);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Update the  new Project Task list
  async UpdateProjectTaskPatch(req, res) {
    try {
      const data = await repository.UpdateProjectTask(req.body);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // delete the  new Project Task list
  async RemoveProjectTaskDelete(req, res) {
    try {
      const { taskId, taskListName, projectId } = req.query;
      const data = await repository.RemoveProjectTask({
        taskId,
        taskListName,
        projectId,
      });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // delete the  Project
  async RemoveProjectDelete(req, res) {
    try {
      const userId = req.user;
      const { projectId } = req.query;
      const data = await repository.RemoveProject({ projectId, userId });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Check user is Admin
  async CheckUserIsAdminProject(req, res) {
    try {
      const userId = req.user;
      const { projectId } = req.query;
      const data = await repository.CheckUserProjectAdmin({
        projectId,
        userId,
      });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Check Contributor Role Access in Project
  async CheckContributorRoleAccessProject(req, res) {
    try {
      const userId = req.user;
      const { projectId } = req.query;
      const data = await repository.CheckContributorRoleAccess({
        projectId,
        userId,
      });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Check the user Can acces to project
  async CheckUserAccessProject(req, res) {
    try {
      const userId = req.user;
      const { projectId } = req.query;
      const data = await repository.CheckUserAccessProject({
        projectId,
        userId,
      });

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }
}

module.exports = ProjectWorkspaceService;
