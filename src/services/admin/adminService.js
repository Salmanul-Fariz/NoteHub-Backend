const { nullValidation } = require('../../utils/dataValidation');
const { resDataFormat } = require('../../utils/formatData');

const AdminRepository = require('../../database/repository/admin/adminRepository');

const repository = new AdminRepository();

class AdminService {
  // Home page
  async Dashboard(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Sign in post page
  async SigninPost(req, res) {
    try {
      const { userName, password } = req.body;
      let data;

      // Check the values are null
      const nullCheck = nullValidation(userName, password);
      if (nullCheck) {
        data = resDataFormat(400, 'Field-Error', 'Please fill the fields');
      }

      // Password Validation
      if (password.length < 6) {
        data = resDataFormat(
          400,
          'Password-Error',
          'Please enter Strong Password'
        );
      }

      // User name Length checking
      if (userName.length < 4) {
        data = resDataFormat(
          400,
          'Username-Error',
          'Please enter strong user name'
        );
      }

      data = await repository.SigninAdmin({
        userName,
        password,
      });

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AdminService;
