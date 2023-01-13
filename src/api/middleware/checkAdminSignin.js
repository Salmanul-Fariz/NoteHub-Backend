const AdminModel = require('../../database/models/adminModel');
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
