// Require functions
const { AuthenticationRepository } = require('../database');
const { nullValidation } = require('../utils/dataValidation');
const { resDataFormat } = require('../utils/formatData');
const emailValidator = require('deep-email-validator');

// All Business logic will be here
class AuthenticationService {
  constructor() {
    this.repository = new AuthenticationRepository();
  }

  async userSignup(userData) {
    try {
      const { userName, email, password } = userData;

      // Check the values are null
      const nullCheck = nullValidation(userName, email, password);
      if (nullCheck) {
        return resDataFormat(400, 'Field-Error', 'Please fill the fields');
      }

      // Email Validation
      const ckeckEmail = await emailValidator.validate(email);
      if (!ckeckEmail.valid) {
        return resDataFormat(400, 'Email-Error', 'Please enter valid Mail');
      }

      // Password Validation
      if (password.length < 6) {
        return resDataFormat(
          400,
          'Password-Error',
          'Please enter Strong Password'
        );
      }

      const data = await this.repository.CreateUser(userData);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthenticationService;
