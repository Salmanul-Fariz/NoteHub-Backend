const { default: mongoose } = require('mongoose');
const { resDataFormat } = require('../../utils/formatData');
const projectWorkspaceModel = require('../models/projectWorkspaceModel');
const userModel = require('../models/userModel');

class ProjectWorkspaceRepository {
  // Details of Project workspace
  async ProjectWorkspace(userId) {
    try {
      const userDetails = await userModel.findById(userId);
      const boardDetails = await projectWorkspaceModel
        .find({
          userId: userId,
        })
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
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

  // Create a project workspace
  async CreateProjectWorkspace(data, userId) {
    try {
      const { boardName, projectType } = data;

      // Checking new board is already existed
      const board = await projectWorkspaceModel.findOne({
        boardName: boardName,
      });

      if (board) {
        return resDataFormat(200, 'Existed', 'board already exist');
      }

      const details = await projectWorkspaceModel.create({
        userId: mongoose.Types.ObjectId(userId),
        boardName: boardName,
        projectType: projectType,
      });

      const pageId = details._id;

      const user = await userModel.updateOne(
        { _id: userId },
        { $push: { 'workSpaces.projectWorkspace.boards': pageId } }
      );

      if (!details || !user) {
        return resDataFormat(400, 'Fail', 'Data not exist');
      }

      const userDetails = await userModel.findById(userId);
      const boardDetails = await projectWorkspaceModel
        .find({
          userId: userId,
        })
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', { userDetails, boardDetails });
    } catch (err) {
      console.log(err);
    }
  }

  // Get a project board details
  async ProjectWorkspaceBoardDetails(boardId, userId) {
    try {
      const userDetails = await userModel.findById(userId);
      const boardDetails = await projectWorkspaceModel
        .findById(boardId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
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

  // Create a project role
  async CreateProjectRole(data) {
    try {
      const { color, projectId } = data;
      let { roleName } = data;
      roleName = roleName.toUpperCase();

      // Checking new role is already existed
      const role = await projectWorkspaceModel.findOne({
        'roles.name': roleName,
      });

      if (role) {
        return resDataFormat(200, 'Existed', 'board already exist');
      }

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { $push: { roles: { name: roleName, color: color } } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Create a project contributor
  async CreateProjectContributor(data) {
    try {
      const { contributorName, projectId, roleName } = data;

      const userExist = await userModel.findOne({
        userName: contributorName,
      });

      if (!userExist) {
        return resDataFormat(200, 'no-user-exist', 'user name not with user');
      }

      // Checking new role is already existed
      const role = await projectWorkspaceModel.findOne({
        'contributors.userId': userExist._id,
      });

      if (role) {
        return resDataFormat(200, 'Existed', 'board already exist');
      }

      const isAdmin = await projectWorkspaceModel.findById(projectId);

      if (isAdmin.userId.equals(userExist._id)) {
        return resDataFormat(200, 'Admin', 'username is admins');
      }

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { $push: { contributors: { userId: userExist._id, role: roleName } } }
      );

      await userModel.updateOne(
        { _id: userExist._id },
        { $push: { 'workSpaces.projectWorkspace.boards': projectId } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Remove a project contributor
  async RemoveProjectContributor(data) {
    try {
      const { projectId, userId } = data;

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        {
          $pull: { contributors: { userId: userId } },
        }
      );

      await userModel.updateOne(
        { _id: userId },
        {
          $pull: { 'workSpaces.projectWorkspace.boards': projectId },
        }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Remove a project roles
  async RemoveProjectRole(data) {
    try {
      const { projectId, roleName } = data;

      const project = await projectWorkspaceModel.findById(projectId);

      for (const element of project.contributors) {
        if (element.role === roleName) {
          await projectWorkspaceModel.updateOne(
            { _id: projectId },
            { $pull: { contributors: { _id: element._id } } }
          );

          await userModel.updateOne(
            { _id: element.userId },
            { $pull: { 'workSpaces.projectWorkspace.boards': projectId } }
          );
        }
      }

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { $pull: { contributors: { role: roleName } } }
      );

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { $pull: { roles: { name: roleName } } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Create a project Task
  async CreateProjectTask(data) {
    try {
      const { taskName, roleName, projectId } = data;

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { $push: { 'tasks.todo': { taskName: taskName, roleName: roleName } } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Update a project Task list
  async UpdateProjectTask(data) {
    try {
      const { newTasks, projectId, editedTaskId, editedListName } = data;

      await projectWorkspaceModel.updateOne(
        { _id: projectId },
        { tasks: newTasks }
      );

      await projectWorkspaceModel.updateOne(
        {
          _id: projectId,
          [`tasks.${editedListName}`]: { $elemMatch: { _id: editedTaskId } },
        },
        { $set: { [`tasks.${editedListName}.$.updateTime`]: Date.now() } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }

  // Remove a project Task list
  async RemoveProjectTask(data) {
    try {
      const { taskId, taskListName, projectId } = data;

      await projectWorkspaceModel.updateOne(
        {
          _id: projectId,
        },
        { $pull: { [`tasks.${taskListName}`]: { _id: taskId } } }
      );

      const boardDetail = await projectWorkspaceModel
        .findById(projectId)
        .populate({
          path: 'userId',
          select: '_id userName email fullName profilePhoto',
        })
        .populate({
          path: 'contributors.userId',
          select: '_id userName email fullName profilePhoto',
        });

      return resDataFormat(200, 'Success', boardDetail);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProjectWorkspaceRepository;
