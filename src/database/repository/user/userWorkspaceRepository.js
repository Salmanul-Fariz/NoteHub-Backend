const { nullValidation } = require('../../../utils/dataValidation');
const { resDataFormat } = require('../../../utils/formatData');
const userModel = require('../../models/userModel');
const userWorkspacePageModal = require('../../models/userWorkspacePage');

class UserWorkspaceRepository {
  // Details of workspace
  async UserWorkspace(userId) {
    try {
      const userDetails = await userModel.findById(userId);
      const pageDetails = await userWorkspacePageModal.find({
        userId: userId,
      });

      if (!userDetails) {
        return resDataFormat(400, 'Fail', 'user not exist');
      }

      return resDataFormat(200, 'Success', { userDetails, pageDetails });
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

  // Create a user workspace
  async CreateUserWorkspace(userId) {
    try {
      const details = await userWorkspacePageModal.create({
        userId: userId,
      });

      const pageId = details._id;

      const userDetails = await userModel.updateOne(
        { _id: userId },
        { $push: { 'workSpaces.userWorkspace.pages': pageId } }
      );
      if (!details || !userDetails) {
        return resDataFormat(400, 'Fail', 'Data not exist');
      }

      return resDataFormat(200, 'Success', details);
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
      console.log(err);
    }
  }

  // Update User workspace Page icon
  async UpdateWorkspacePageIcon(data) {
    try {
      const { iconName, pageId } = data;
      const isNull = nullValidation(iconName, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId },
        { icon: iconName }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserWorkspaceRepository;
