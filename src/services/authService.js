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

  // Register a user
  async UserSignup(userData, host) {
    try {
      const { userName, email, password } = userData;

      // Check the values are null
      const nullCheck = nullValidation(userName, email, password);
      if (nullCheck) {
        return resDataFormat(200, 'Field-Error', 'Please fill the fields');
      }

      // Email Validation
      const ckeckEmail = await emailValidator.validate(email);
      if (!ckeckEmail.valid) {
        return resDataFormat(200, 'Email-Error', 'Please enter valid Mail');
      }

      // Password Validation
      if (password.length < 6) {
        return resDataFormat(
          200,
          'Password-Error',
          'Please enter Strong Password'
        );
      }

      // User name Length checking
      if (userName.length < 4) {
        return resDataFormat(
          200,
          'UserName-Error',
          'Please enter strong user name'
        );
      }

      const data = await this.repository.CreateUser(userData, host);

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  // Check user name is exist
  async UsernameExist(userName) {
    try {
      const data = await this.repository.UserNameExist(userName);

      return resDataFormat(200, data ? 'Fail' : 'Success', data);
    } catch (err) {
      console.log(err);
    }
  }

  // Verification of Email
  async EmailValidation(emailToken) {
    try {
      const data = await this.repository.EmailVerification(emailToken);

      return resDataFormat(
        200,
        data ? 'Success' : 'Failed',
        data ? 'verifyed' : 'Oops..!'
      );
    } catch (err) {
      console.log(err);
    }
  }

  async CheckVerifyMail(userToken) {
    try {
      const data = await this.repository.VerifyMail(userToken);

      return resDataFormat(200, 'Success', data);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthenticationService;
