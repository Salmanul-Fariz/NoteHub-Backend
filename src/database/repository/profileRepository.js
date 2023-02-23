const { nullValidation } = require('../../utils/dataValidation');
const { resDataFormat } = require('../../utils/formatData');
const userModel = require('../models/userModel');

class ProfileRepository {
  // Get the user Details
  async ProfileUserDetails(userId) {
    try {
      const isExist = await userModel.findById(userId);
      if (!isExist) {
        return resDataFormat(400, 'No-exist', isExist);
      }

      return resDataFormat(200, 'Success', isExist);
    } catch (err) {
      console.log(err);
    }
  }

  // Profile Image Update
  async ProfileImageUpdate(userId, url) {
    try {
      await userModel.updateOne({ _id: userId }, { profilePhoto: url });

      const userDetails = await userModel.findById(userId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Profile name Update
  async ProfileNameUpdate(userId, value) {
    try {
      const isNull = nullValidation(value);

      if (isNull) {
        return resDataFormat(200, 'Null data', 'Data empty');
      }

      await userModel.updateOne({ _id: userId }, { fullName: value });

      const userDetails = await userModel.findById(userId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  async ProfileUserNameUpdate(userId, value) {
    try {
      const isNull = nullValidation(value);

      if (isNull) {
        return resDataFormat(200, 'Null data', 'Data empty');
      }

      const isExist = await userModel.findOne({ userName: value });
      if (isExist) {
        return resDataFormat(200, 'Exist data', 'Data empty');
      }

      await userModel.updateOne({ _id: userId }, { userName: value });

      const userDetails = await userModel.findById(userId);

      return resDataFormat(200, 'Success', userDetails);
    } catch (err) {
      console.log(err);
    }
  }

  // Get the Pages  Details in profile
  async ProfilePagesDetails(userId) {
    try {
      const isExist = await userModel.findById(userId).populate({
        path: 'workSpaces.userWorkspace.pages',
        select: '_id title icon',
      });

      if (!isExist) {
        return resDataFormat(400, 'No-exist', isExist);
      }

      return resDataFormat(200, 'Success', isExist);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = ProfileRepository;
