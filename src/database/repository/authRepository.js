const crypto = require('crypto');
const { generateFromEmail } = require('unique-username-generator');

const UserModel = require('../models/userModel');
const { resDataFormat } = require('../../utils/formatData');
const {
  generateSalt,
  generatePassword,
  generateToken,
  emailVerification,
  verifyToken,
  validatePassword,
} = require('../../utils/authSecurity');

// Dealing with database operations
class AuthenticationRepository {
  // Register a user
  async CreateUser(data, host) {
    try {
      // Check username is exist
      const userExit = await UserModel.findOne({ userName: data.userName });

      if (userExit) {
        return resDataFormat(400, 'Name-Error', 'Enter the unique user name');
      }

      // Check email is exist
      const emailExit = await UserModel.findOne({ email: data.email });

      if (emailExit) {
        return resDataFormat(400, 'Email-exist-Error', 'Email already exist');
      }

      // create salt
      const salt = await generateSalt();

      const userPassword = await generatePassword(data.password, salt);

      const userCreated = await UserModel.create({
        userName: data.userName,
        email: data.email,
        emailToken: crypto.randomBytes(64).toString('hex'),
        password: userPassword,
        profilePhoto:
          'https://notehub0.s3.ap-south-1.amazonaws.com/resorces/account-icon.png',
      });

      const token = await generateToken({ id: userCreated._id });

      // Send Mail fot Verification
      emailVerification(userCreated.email, userCreated.emailToken, host);

      return resDataFormat(200, 'Success', { userCreated, token });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Check user name userNameExist
  async UserNameExist(userName) {
    try {
      const userNameExist = await UserModel.findOne({ userName: userName });

      if (userNameExist) return true;

      return false;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Email Verification
  async EmailVerification(token) {
    try {
      const userNameExist = await UserModel.findOne({ emailToken: token });

      if (userNameExist) {
        await UserModel.updateOne(
          { _id: userNameExist._id },
          {
            emailToken: '',
            verify: true,
          }
        );
        return true;
      }

      return false;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Verify Email Verification
  async VerifyMail(data) {
    try {
      return verifyToken(data).then(async (response) => {
        if (response === undefined) {
          return 'token-expired';
        }
        const userdata = await UserModel.findById(response.id);
        if (!userdata) {
          return 'Delete';
        }

        if (userdata.verify) {
          return 'Verify';
        }

        const expireTime = userdata.createdAt.getTime() + 120000;
        const date = new Date();
        const currentMs = date.getTime();

        if (expireTime <= currentMs) {
          await UserModel.deleteOne({ _id: userdata._id });
          return 'Delete';
        }
        return 'NotVerify';
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Signin a user
  async SigninUser(type, data) {
    try {
      let isUserExist;

      // Check is mail or username
      if (type === 'email') {
        isUserExist = await UserModel.findOne({
          email: data.usernameOrEmail,
        }).select('+password');
      } else {
        isUserExist = await UserModel.findOne({
          userName: data.usernameOrEmail,
        }).select('+password');
      }

      if (!isUserExist) {
        return resDataFormat(
          400,
          'Username-Or-Email',
          'Enter the Correct email or user name'
        );
      }

      const isPassword = await validatePassword(
        data.password,
        isUserExist.password
      );

      if (!isPassword) {
        return resDataFormat(
          400,
          'Password-Error',
          'Enter the Correct Password'
        );
      }

      const token = await generateToken({ id: isUserExist._id });

      return resDataFormat(200, 'Success', { isUserExist, token });
    } catch (err) {
      console.log(err);
    }
  }

  // Ckeck user already Signin Google
  async CheckSigninGoogle(email) {
    try {
      return await UserModel.findOne({ email: email });
    } catch (err) {
      console.log(err);
    }
  }

  // Create accound for signin with Google
  async RegisterGoogleAccount(userData) {
    try {
      let completed = false;
      let username;
      do {
        username = generateFromEmail(userData.email, 3);
        const isExisted = await UserModel.findOne({ userName: username });
        if (!isExisted) {
          completed = true;
        }
      } while (!completed);

      const userCreated = await UserModel.create({
        userName: username,
        fullName: userData.name,
        email: userData.email,
        profilePhoto: userData.photoUrl,
        googleAuth: true,
        verify: true,
      });
      const token = await generateToken({ id: userCreated._id });

      return resDataFormat(200, 'Success', { userCreated, token });
    } catch (err) {
      console.log(err);
    }
  }

  // Check the user  details by Signin With google
  async CheckUserDetails(email) {
    try {
      const user = await UserModel.findOne({
        email: email,
      });
      const token = await generateToken({ id: user._id });

      return resDataFormat(200, 'Success', { user, token });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthenticationRepository;
