const { mongoose } = require('mongoose');

const { nullValidation } = require('../../utils/dataValidation');
const { resDataFormat } = require('../../utils/formatData');
const { deleteImageS3 } = require('../../utils/s3');
const userModel = require('../models/userModel');
const userWorkspacePageModal = require('../models/userWorkspacePage');
const Tree = require('../../utils/workspaceTree');

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
    }
  }

  // Details of workspace page
  async UserWorkspacePage(data) {
    try {
      const { id } = data;

      const pageDetails = await userWorkspacePageModal.findById(id);

      if (!pageDetails) {
        return resDataFormat(400, 'Fail', 'user not exist');
      }

      return resDataFormat(200, 'Success', pageDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
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
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
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
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
    }
  }

  // Create a user workspace
  async CreateUserWorkspace(userId) {
    try {
      const tree = new Tree();

      tree._insertFirstNode({
        _id: tree._createNewId(),
        type: 'text',
        isToggle: false,
        imgPosition: null,
        content: null,
        childNode: [],
      });

      // Checking name is already existed
      let index = 0;
      let titleName = 'Untitled';
      let isNotValue;
      do {
        const page = await userWorkspacePageModal.findOne({
          title: titleName,
        });

        if (!page) {
          isNotValue = true;
        } else {
          titleName = `Untitled${index}`;
          index++;
        }
      } while (!isNotValue);

      const details = await userWorkspacePageModal.create({
        userId: userId,
        page: tree.root,
        title: titleName,
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
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
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

      // Checking name is already existed
      let index = 0;
      let titleName = pageName;
      let isNotValue;
      do {
        const page = await userWorkspacePageModal.findOne({
          title: titleName,
        });

        if (!page) {
          isNotValue = true;
        } else {
          titleName = `${pageName}${index}`;
          index++;
        }
      } while (!isNotValue);

      await userWorkspacePageModal.updateOne(
        { _id: pageId },
        { title: titleName }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
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
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
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
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
    }
  }

  // Update User workspace Page type
  async UpdateWorkspaceSecType(data) {
    try {
      const { pageId, pageSectionId, pageType } = data;
      const isNull = nullValidation(pageSectionId, pageType, pageId);
      if (isNull) {
        return resDataFormat(400, 'resCatchError', 'Data not exist');
      }

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._findAndUpdateType(pageType, pageSectionId, tree.root);

      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);
      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Update User workspace Page content
  async UpdateWorkspaceSecContent(data) {
    try {
      const { pageId, pageSectionId, pageContent } = data;
      const isNull = nullValidation(pageSectionId, pageId);
      if (isNull) {
        return resDataFormat(400, 'resCatchError', 'Data not exist');
      }

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._findAndUpdateContent(pageContent, pageSectionId, tree.root);

      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      await userWorkspacePageModal.updateOne(
        { _id: pageId, 'page._id': pageSectionId },
        { 'page.$.content': pageContent }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Add User workspace Page  Section
  async UpdateWorkspaceSecAdd(data, query) {
    try {
      const { pageId, pageSectionId, pageContent, pageType } = data;

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;

      const value = {
        _id: tree._createNewId(),
        type: pageType,
        isToggle: false,
        imgPosition: null,
        content: pageContent,
        childNode: [],
      };

      //  Check Whick insert
      if (query === 'InsertFirstNode') {
        tree._insertFirstNode({
          _id: tree._createNewId(),
          type: 'text',
          isToggle: false,
          imgPosition: null,
          content: null,
          childNode: [],
        });
      } else if (query === 'TopNodeInsert') {
        if (pageType === 'image') {
          value.type = 'text';
          value.content = null;
        }
        tree._findTopNodeAndInsert(value, tree.root, pageSectionId);
      } else if (query === 'ParentInsert') {
        tree._findParentAndInsert(tree.root, pageSectionId);
      } else if (query === 'AddNewNodeWithTopNode') {
        value.content = null;
        if (pageType === 'image') {
          value.type = 'text';
          value.content = null;
        }
        tree._findTopNodeAndInsertNewNode(value, tree.root, pageSectionId);
      } else if (query === 'NodeAndChangeToParentNode') {
        tree._findNodeAndChangeToParentNode(tree.root, pageSectionId);
      } else if (query === 'RemoveNodeWithChild') {
        tree._removeNodeWithChild(tree.root, pageSectionId);

        // deleteImageS3
        for (let i = 0; i < tree.S3UrlDelete.length; i++) {
          const url = tree.S3UrlDelete[i].split('.com/');
          await deleteImageS3(url[1]);
        }
      } else if (query === 'RemoveNodeWithOutChild') {
        tree._removeNodeWithOutChild(tree.root, pageSectionId);

        // deleteImageS3
        if (tree.S3UrlDelete.length === 1) {
          const url = tree.S3UrlDelete[0].split('.com/');
          await deleteImageS3(url[1]);
        }
      }
      //  update the data in mongodbd
      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);
      return resDataFormat(200, 'Success', {
        data: userDetails,
        id: value._id,
      });
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Update User workspace Section toggle option
  async UpdateWorkspaceSecToggleOption(data) {
    try {
      const { pageId, pageSectionId, isToggle } = data;
      const isNull = nullValidation(pageSectionId, pageId);
      if (isNull) {
        return resDataFormat(400, 'resCatchError', 'Data not exist');
      }

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._findAndUpdateToggleOption(isToggle, pageSectionId, tree.root);

      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      await userWorkspacePageModal.updateOne(
        { _id: pageId, 'page._id': pageSectionId },
        { 'page.$.content': isToggle }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Update User workspace Page image Section type
  async UpdateWorkspaceSecImageType(data) {
    try {
      const { pageId, pageSectionId, imageUrl } = data;
      const isNull = nullValidation(pageSectionId, imageUrl, pageId);
      if (isNull) {
        return resDataFormat(400, 'resCatchError', 'Data not exist');
      }

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._findAndUpdateSecImage(imageUrl, pageSectionId, tree.root);

      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);
      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Update User workspace Page image Section Size
  async UpdateWorkspaceSecImageSizeType(data) {
    try {
      const { pageId, pageSectionId, imgSize } = data;
      const isNull = nullValidation(pageSectionId, imgSize, pageId);
      if (isNull) {
        return resDataFormat(400, 'resCatchError', 'Data not exist');
      }

      // Tree setup
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._findAndUpdateSecImageSize(imgSize, pageSectionId, tree.root);

      await userWorkspacePageModal.updateOne(
        { _id: pageDetails._id },
        { page: tree.root }
      );

      const userDetails = await userWorkspacePageModal.findById(pageId);
      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }

  // Delete a user workspace page
  async DeleteUserWorkspacePage(data) {
    try {
      const { user, pageId } = data;

      // remove the image from  s3
      const tree = new Tree();
      const pageDetails = await userWorkspacePageModal.findById(pageId);
      tree.root = pageDetails.page;
      tree._removeS3Url(tree.root);
      for (let i = 0; i < tree.S3UrlDelete.length; i++) {
        const url = tree.S3UrlDelete[i].split('.com/');
        await deleteImageS3(url[1]);
      }

      // Checking name is already existet
      const userPull = await userModel.updateOne(
        { _id: user },
        {
          $pull: {
            'workSpaces.userWorkspace.pages': mongoose.Types.ObjectId(pageId),
          },
        }
      );
      if (userPull.modifiedCount === 1) {
        await userWorkspacePageModal.deleteOne({ _id: pageId });
      }

      return resDataFormat(200, 'Success', 'Deleted page');
    } catch (err) {
      if (err.name === 'CastError') {
        return resDataFormat(400, 'Fail', 'user not exist');
      }
    }
  }

  // Check user can acces to Page
  async CheckUserAccessPage(data) {
    try {
      const { pageId, userId } = data;

      const userDetails = await userModel.findById(userId);
      let userAccess = false;

      for (const element of userDetails.workSpaces.userWorkspace.pages) {
        if (element.equals(pageId)) {
          userAccess = true;
        }
      }

      return resDataFormat(200, 'Success', userAccess);
    } catch (err) {
      if (err.name === 'CastError') {
        return err.name;
      }
    }
  }
}

module.exports = UserWorkspaceRepository;
