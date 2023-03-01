const userModel = require('../models/userModel');
const userWorkspacePageModal = require('../models/userWorkspacePage');

class S3Repository {
  // Check the conver image is exist
  async CheckImageExist(pageId) {
    try {
      const isExist = await userWorkspacePageModal.findById(pageId);
      if (isExist.coverImg.url === null) {
        return false;
      }

      return isExist.coverImg.url;
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Check the profile image exist
  async CheckProfileImageExist(userId) {
    try {
      const isExist = await userModel.findById(userId);

      const url = isExist.profilePhoto.split('/');
      if (url[2] === 'notehub0.s3.ap-south-1.amazonaws.com') {
        return isExist.profilePhoto;
      }

      return false;
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }
}
module.exports = S3Repository;
