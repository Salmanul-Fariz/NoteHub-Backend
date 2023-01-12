const UserModel = require('../../database/models/userModel');
const { verifyToken } = require('../../utils/authSecurity');
const nullValidation = require('../../utils/dataValidation').nullValidation;

module.exports = function (req, res, next) {
  try {
    if (nullValidation(req.query.token)) {
      res.status(200).json({
        status: 'No-tokens',
      });
    } else {
      verifyToken(req.query.token).then(async (response) => {
        if (response !== undefined) {
          const userdata = await UserModel.findById(response.id);
          if (userdata) {
            if (!userdata.verify) {
              res.status(200).json({
                status: 'Pending-Verify',
              });
            } else {
              next();
            }
          } else {
            res.status(200).json({
              status: 'No-token',
            });
          }
        } else {
          res.status(200).json({
            status: 'No-token',
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
