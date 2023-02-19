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
}
module.exports = ProfileRepository;
