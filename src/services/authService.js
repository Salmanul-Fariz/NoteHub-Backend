// Require functions
const emailValidator = require('deep-email-validator');

const AuthenticationRepository = require('../database/repository/authRepository');
const { nullValidation } = require('../utils/dataValidation');
const { resDataFormat } = require('../utils/formatData');

const repository = new AuthenticationRepository();

// All Business logic will be here
class AuthenticationService {
  // View user signup page
  async UserSignupGet(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
        message: 'View Signup Page',
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Register a user
  async UserSignupPost(req, res) {
    try {
      const { userName, email, password } = req.body;
      let data;

      if (req.query.userNameExist) {
        // Check username exist
        const isUsername = await repository.UserNameExist(
          req.query.userNameExist
        );

        data = resDataFormat(200, isUsername ? 'Fail' : 'Success', isUsername);
      } else {
        // Check the values are null
        const nullCheck = nullValidation(userName, email, password);
        if (nullCheck) {
          data = resDataFormat(200, 'Field-Error', 'Please fill the fields');
        }

        // Email Validation
        const ckeckEmail = await emailValidator.validate(email);
        if (!ckeckEmail.valid) {
          data = resDataFormat(200, 'Email-Error', 'Please enter valid Mail');
        }

        // Password Validation
        if (password.length < 6) {
          data = resDataFormat(
            200,
            'Password-Error',
            'Please enter Strong Password'
          );
        }

        // User name Length checking
        if (userName.length < 4) {
          data = resDataFormat(
            200,
            'UserName-Error',
            'Please enter strong user name'
          );
        }

        data = await repository.CreateUser(
          { userName, email, password },
          req.headers.host
        );
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Verification of Email
  async EmailValidationGet(req, res) {
    try {
      const token = req.query.token;

      const isVerify = await repository.EmailVerification(token);

      const data = resDataFormat(
        200,
        isVerify ? 'Success' : 'Failed',
        isVerify ? 'verifyed' : 'Oops..!'
      );

      return res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Check Verified Mail
  async CheckVerifyMailPost(req, res) {
    try {
      const isVerified = await repository.VerifyMail(req.body.jwt);

      const data = resDataFormat(200, 'Success', isVerified);

      return res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // View user Signin page
  async UserSigninGet(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
        message: 'View Signin Page',
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Signin user
  async UserSigninPost(req, res) {
    try {
      const { usernameOrEmail, password } = req.body;
      let data;

      // Check the values are null
      const nullCheck = nullValidation(usernameOrEmail, password);
      if (nullCheck) {
        data = resDataFormat(200, 'Field-Error', 'Please fill the fields');
      }

      // Password Validation
      if (password.length < 6) {
        data = resDataFormat(
          200,
          'Password-Error',
          'Please enter Strong Password'
        );
      }

      // User name Length checking
      if (usernameOrEmail.length < 4) {
        data = resDataFormat(
          200,
          'UserNameOrEmail',
          'Please enter strong user name'
        );
      }

      // Check it is mail or username
      const isEmail = await emailValidator.validate(usernameOrEmail);

      if (isEmail.valid) {
        data = await repository.SigninUser('email', {
          usernameOrEmail,
          password,
        });
      }

      // if (!isEmail.valid) {
      //   data = resDataFormat(200, 'userName', 'Please enter valid Mail');
      // }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthenticationService;
