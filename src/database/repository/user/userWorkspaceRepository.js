const { nullValidation } = require('../../../utils/dataValidation');
const { resDataFormat } = require('../../../utils/formatData');
const userModel = require('../../models/userModel');
const userWorkspacePageModal = require('../../models/userWorkspacePage');
const Tree = require('../../../utils/workspaceTree');

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
      const tree = new Tree();

      tree._insertFirstNode({
        _id: tree._createNewId(),
        type: 'text',
        content: null,
        childNode: [],
      });

      const details = await userWorkspacePageModal.create({
        userId: userId,
        page: tree.root,
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

  // Update User workspace Page Name
  async UpdateWorkspacePageName(data) {
    try {
      const { pageName, pageId } = data;
      const isNull = nullValidation(pageName, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      if (pageName.length > 20) {
        return resDataFormat(400, 'failed', 'Page maxLength is 20');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId },
        { title: pageName }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Update User workspace Page cover image
  async UpdateWorkspaceCoverImage(data) {
    try {
      const { imageUrl, pageId } = data;
      const isNull = nullValidation(imageUrl, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId },
        { 'coverImg.url': imageUrl }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Update User workspace Page cover image Position
  async UpdateWorkspaceCoverPosition(data) {
    try {
      const { positionY, pageId } = data;
      const isNull = nullValidation(positionY, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId },
        { 'coverImg.positionY': +positionY }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Update User workspace Page type
  async UpdateWorkspaceSecType(data) {
    try {
      const { pageId, pageSectionId, pageType } = data;
      const isNull = nullValidation(pageSectionId, pageType, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId, 'page._id': pageSectionId },
        { 'page.$.type': pageType, 'page.$.content': null }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Update User workspace Page content
  async UpdateWorkspaceSecContent(data) {
    try {
      const { pageId, pageSectionId, pageContent } = data;
      const isNull = nullValidation(pageSectionId, pageId);
      if (isNull) {
        return resDataFormat(400, 'failed', 'Data not exist');
      }

      await userWorkspacePageModal.updateOne(
        { _id: pageId, 'page._id': pageSectionId },
        { 'page.$.content': pageContent }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Add User workspace Page  Section
  async UpdateWorkspaceSecAdd(data) {
    try {
      // const { pageId, pageSectionId } = data;
      // const isNull = nullValidation(pageSectionId, pageId);
      // if (isNull) {
      //   return resDataFormat(400, 'failed', 'Data not exist');
      // }

      // // await userWorkspacePageModal.updateOne(
      // //   { _id: pageId, 'page._id': pageSectionId },
      // //   { 'page.$.content': pageContent }
      // // );
      // const pageDetails = await userWorkspacePageModal.findById(pageId);
      // const pageSecIndex = pageDetails.page.findIndex((val) => {
      //   const splitObjId = String(val._id).split('"')[0];
      //   return splitObjId === pageSectionId;
      // });

      // pageDetails.page.splice(pageSecIndex + 1, 0, {
      //   type: 'text',
      //   content: null,
      //   childNode: [],
      // });
      // pageDetails.save();
      // console.log(pageSecIndex);

      // const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success');
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserWorkspaceRepository;
