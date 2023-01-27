const UserModel = require('../../database/models/userModel');
const { verifyToken } = require('../../utils/authSecurity');
const nullValidation = require('../../utils/dataValidation').nullValidation;

module.exports = function (req, res, next) {
  try {
    const auth = req.headers.authorization;
    let token;
    if (auth) {
      token = auth.split(' ')[1];
    }

    if (nullValidation(token)) {
      res.status(200).json({
        status: 'No-tokens',
      });
    } else {
      verifyToken(token).then(async (response) => {
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
