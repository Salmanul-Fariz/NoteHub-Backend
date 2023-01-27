const { resDataFormat } = require('../../../utils/formatData');
const userModel = require('../../models/userModel');

class UserWorkspaceRepository {
  // Details of workspace
  async UserWorkspace(userId) {
    try {
      const userDetails = await userModel.findById(userId);

      if (!userDetails) {
        return resDataFormat(400, 'Fail', 'user not exist');
      }

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
      console.log(err);
    }
  }

  // Update User workspace icon
  async UpdateWorkspaceIcon(iconName, userId) {
    try {
      const { data } = iconName;
      const userDetails = await userModel.updateOne(
        { _id: userId },
        { 'workSpaces.userWorkspace.icon': data }
      );

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Update User workspace Name
  async UpdateWorkspaceName(name, userId) {
    try {
      const { data } = name;
      const userDetails = await userModel.updateOne(
        { _id: userId },
        { 'workSpaces.userWorkspace.name': data }
      );

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserWorkspaceRepository;
