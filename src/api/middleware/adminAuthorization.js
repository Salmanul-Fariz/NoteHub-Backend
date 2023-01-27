const AdminModel = require('../../database/models/adminModel');
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
          const adminData = await AdminModel.findById(response.id);
          if (adminData) {
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
