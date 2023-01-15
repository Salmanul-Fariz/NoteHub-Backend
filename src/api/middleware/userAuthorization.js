const UserModel = require('../../database/models/userModel');
const { verifyToken } = require('../../utils/authSecurity');
const { nullValidation } = require('../../utils/dataValidation');

module.exports = (req, res, next) => {
  try {
    if (nullValidation(req.query.token)) {
      res.status(408).json({
        status: 'No-tokens',
      });
    } else {
      verifyToken(req.query.token).then(async (response) => {
        if (response !== undefined) {
          const userData = await UserModel.findById(response.id);
          if (userData) {
            next();
          } else {
            res.status(408).json({
              status: 'No-token',
            });
          }
        } else {
          res.status(408).json({
            status: 'No-token',
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
