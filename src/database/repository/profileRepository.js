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
}
module.exports = ProfileRepository;
