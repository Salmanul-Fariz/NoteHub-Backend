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
}

module.exports = UserWorkspaceService;
