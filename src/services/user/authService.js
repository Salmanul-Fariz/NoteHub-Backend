const emailValidator = require('deep-email-validator');

const AuthenticationRepository = require('../../database/repository/user/authRepository');
const {
  nullValidation,
  userNameValidation,
  passwordValidation,
} = require('../../utils/dataValidation');
const { resDataFormat } = require('../../utils/formatData');

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

        data = resDataFormat(
          isUsername ? 400 : 200,
          isUsername ? 'Fail' : 'Success',
          isUsername
        );
      } else {
        // Check the values are null
        const nullCheck = nullValidation(userName, email, password);
        const ckeckEmail = await emailValidator.validate(email);
        const isValid = userNameValidation(userName);
        const correctPattern = passwordValidation(password);

        if (nullCheck) {
          data = resDataFormat(400, 'Field-Error', 'Please fill the fields');
        } else if (!ckeckEmail.valid) {
          // Email Validation
          data = resDataFormat(400, 'Email-Error', 'Please enter valid Mail');
        } else if (password.length < 6) {
          // Password Validation
          data = resDataFormat(
            400,
            'Password-Error',
            'Please enter Strong Password'
          );
        } else if (!isValid) {
          data = resDataFormat(
            400,
            'Username-no-Valid',
            'Please enter Valid user ame'
          );
        } else if (userName.length < 4) {
          // User name Length checking
          data = resDataFormat(
            400,
            'UserName-Error',
            'Please enter strong user name'
          );
        } else if (!correctPattern) {
          // Password pattern
          data = resDataFormat(
            400,
            'Password-Error',
            'Must contain UpperCase,LowerCase,number,special character'
          );
        } else {
          data = await repository.CreateUser(
            { userName, email, password },
            req.headers.host
          );
        }
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // Verification of Email token
  async EmailValidationGet(req, res) {
    try {
      const token = req.query.token;

      const isVerify = await repository.EmailVerification(token);

      const data = resDataFormat(
        isVerify ? 200 : 408,
        isVerify ? 'Success' : 'Failed',
        isVerify ? 'verifyed' : 'Time expired for a request'
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
      if (usernameOrEmail.length < 4) {
        data = resDataFormat(
          400,
          'Username-Or-Email',
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
      } else {
        data = await repository.SigninUser('username', {
          usernameOrEmail,
          password,
        });
      }

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
