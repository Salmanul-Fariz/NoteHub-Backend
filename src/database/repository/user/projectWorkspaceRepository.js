const { resDataFormat } = require('../../../utils/formatData');
const projectWorkspaceModel = require('../../models/projectWorkspaceModel');
const userModel = require('../../models/userModel');

class ProjectWorkspaceRepository {
  // Details of Project workspace
  async ProjectWorkspace(userId) {
    try {
      const userDetails = await userModel.findById(userId);
      const boardDetails = await projectWorkspaceModel.find({
        userId: userId,
      });
      if (!userDetails) {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
      return resDataFormat(200, 'Success', { userDetails, boardDetails });
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
      console.log(err);
    }
  }

  // Update User workspace Name
  async UpdateProjectWorkspaceName(name, userId) {
    try {
      const { data } = name;
      const userDetails = await userModel.updateOne(
        { _id: userId },
        { 'workSpaces.projectWorkspace.name': data }
      );

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProjectWorkspaceRepository;
