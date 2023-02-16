const userWorkspacePageModal = require('../../models/userWorkspacePage');

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
      console.log(err);
    }
  }
}
module.exports = S3Repository;
