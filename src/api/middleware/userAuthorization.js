const UserModel = require('../../database/models/userModel');
const { verifyToken } = require('../../utils/authSecurity');
const { nullValidation } = require('../../utils/dataValidation');

module.exports = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    let token;
    if (auth) {
      token = auth.split(' ')[1];
    }

    if (nullValidation(token)) {
      res.status(408).json({
        status: 'No-tokens',
      });
    } else {
      verifyToken(token).then(async (response) => {
        if (response !== undefined) {
          const userData = await UserModel.findById(response.id);
          if (userData) {
            req.user = response.id;
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
