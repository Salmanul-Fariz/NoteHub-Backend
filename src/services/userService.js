const { resDataFormatError } = require('../utils/databaseErrResponse');

class UserService {
  // Home page
  async HomePage(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
      });
    } catch (err) {
      if (err) {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }
}

module.exports = UserService;
