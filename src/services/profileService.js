const ProfileRepository = require('../database/repository/profileRepository');

const repository = new ProfileRepository();

class ProfileService {
  // Profile User Details
  async ProfileUserDetails(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProfileUserDetails(userId);

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Profile Image update
  async ProfileImageUpdate(req, res) {
    try {
      const userId = req.user;
      const { url } = req.body;
      const data = await repository.ProfileImageUpdate(userId, url);

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Profile name update
  async ProfileNameUpdate(req, res) {
    try {
      const userId = req.user;
      const { value } = req.body;
      const data = await repository.ProfileNameUpdate(userId, value);

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProfileService;
