const emailValidator = require('email-validator');
const AuthenticationRepository = require('../database/repository/authRepository');
const { resDataFormatError } = require('../utils/databaseErrResponse');
const {
  nullValidation,
  userNameValidation,
  passwordValidation,
} = require('../utils/dataValidation');
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
      if (err) {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
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

        if (isUsername === 'CastError') {
          throw new Error(isUsername);
        } else {
          data = resDataFormat(
            200,
            isUsername ? 'Fail' : 'Success',
            isUsername
          );
        }
      } else {
        // Check the values are null
        const nullCheck = nullValidation(userName, email, password);
        const ckeckEmail = await emailValidator.validate(email);
        const isValid = userNameValidation(userName);
        const correctPattern = passwordValidation(password);

        if (nullCheck) {
          data = resDataFormat(200, 'Field-Error', 'Please fill the fields');
        } else if (!ckeckEmail) {
          // Email Validation
          data = resDataFormat(200, 'Email-Error', 'Please enter valid Mail');
        } else if (password.length < 6) {
          // Password Validation
          data = resDataFormat(
            200,
            'Password-Error',
            'Please enter Strong Password'
          );
        } else if (!isValid) {
          data = resDataFormat(
            200,
            'Username-no-Valid',
            'Please enter Valid user ame'
          );
        } else if (userName.length < 4) {
          // User name Length checking
          data = resDataFormat(
            200,
            'UserName-Error',
            'Please enter strong user name'
          );
        } else if (!correctPattern) {
          // Password pattern
          data = resDataFormat(
            200,
            'Password-Error',
            'Must contain UpperCase,LowerCase,number,special character'
          );
        } else {
          data = await repository.CreateUser(
            { userName, email, password },
            req.headers.host
          );

          if (data === 'CastError') {
            throw new Error(data);
          }
        }
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Verification of Email token
  async EmailValidationGet(req, res) {
    try {
      const token = req.query.token;

      const isVerify = await repository.EmailVerification(token);

      if (isVerify === 'CastError') {
        throw new Error(isVerify);
      }

      const data = resDataFormat(
        isVerify ? 200 : 408,
        isVerify ? 'Success' : 'Failed',
        isVerify ? 'verifyed' : 'Time expired for a request'
      );

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Check Verified Mail
  async CheckVerifyMailPost(req, res) {
    try {
      const isVerified = await repository.VerifyMail(req.body.jwt);

      const data = resDataFormat(200, 'Success', isVerified);

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
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
      if (err) {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
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
          'Username-Or-Email',
          'Please enter strong user name'
        );
      }

      // Check it is mail or username
      const isEmail = await emailValidator.validate(usernameOrEmail);

      if (isEmail) {
        data = await repository.SigninUser('email', {
          usernameOrEmail,
          password,
        });
      } else {
        data = await repository.SigninUser('username', {
          usernameOrEmail,
          password,
        });

        if (data === 'CastError') {
          throw new Error(data);
        }
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }

  // Signin With google
  async SigninWithGoogle(req, res) {
    try {
      // check user already signin
      const { name, email, photoUrl } = req.body;
      const user = await repository.CheckSigninGoogle(email);
      let data;
      if (!user) {
        data = await repository.RegisterGoogleAccount({
          name,
          email,
          photoUrl,
        });
      } else if (user.googleAuth === true) {
        data = await repository.CheckUserDetails(email);
      } else {
        data = resDataFormat(
          200,
          'Email-Error',
          'email is already Used for another accound'
        );
      }

      if (data === 'CastError') {
        throw new Error(data);
      }

      res.status(data.statusCode).json({
        status: data.status,
        data: data.result,
      });
    } catch (err) {
      if (err.message === 'CastError') {
        resDataFormatError(res, 400, 'CastError', 'Error in database!');
      } else {
        resDataFormatError(res, 400, 'resCatchError', 'Error in catch block!');
      }
    }
  }
}

module.exports = AuthenticationService;
