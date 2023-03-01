const ProfileRepository = require('../database/repository/profileRepository');
const { resDataFormatError } = require('../utils/databaseErrResponse');

const repository = new ProfileRepository();

class ProfileService {
  // Profile User Details
  async ProfileUserDetails(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProfileUserDetails(userId);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Profile Image update
  async ProfileImageUpdate(req, res) {
    try {
      const userId = req.user;
      const { url } = req.body;
      const data = await repository.ProfileImageUpdate(userId, url);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Profile name update
  async ProfileNameUpdate(req, res) {
    try {
      const userId = req.user;
      const { value } = req.body;
      const data = await repository.ProfileNameUpdate(userId, value);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Profile user name update
  async ProfileUserNameUpdate(req, res) {
    try {
      const userId = req.user;
      const { value } = req.body;
      const data = await repository.ProfileUserNameUpdate(userId, value);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Profile Pages Details
  async ProfilePagesDetails(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProfilePagesDetails(userId);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Profile Project Details
  async ProfileProjectDetails(req, res) {
    try {
      const userId = req.user;
      const data = await repository.ProfileProjectDetails(userId);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }
}

module.exports = ProfileService;
