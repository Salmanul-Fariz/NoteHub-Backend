const {
  validatePassword,
  generateToken,
} = require('../../../utils/authSecurity');
const { resDataFormat } = require('../../../utils/formatData');
const AdminModel = require('../../models/adminModel');

class AdminRepository {
  // Sign in Admin
  async SigninAdmin(adminData) {
    try {
      const admin = await AdminModel.findOne({
        userName: adminData.userName,
      }).select('+password');

      if (!admin) {
        return resDataFormat(
          400,
          'Username-Error',
          'Enter the Correct user name'
        );
      }

      const isPassword = await validatePassword(
        adminData.password,
        admin.password
      );

      if (!isPassword) {
        return resDataFormat(
          400,
          'Password-Error',
          'Enter the Correct Password'
        );
      }

      const token = await generateToken({ id: admin._id });

      return resDataFormat(200, 'Success', { admin, token });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AdminRepository;
