const crypto = require('crypto');

const { UserModel } = require('../models');
const { resDataFormat } = require('../../utils/formatData');
const {
  generateSalt,
  generatePassword,
  generateToken,
  emailVerification,
  verifyToken,
} = require('../../utils/authSecurity');
const { fail } = require('assert');

// Dealing with database operations
class AuthenticationRepository {
  // Register a user
  async CreateUser(data, host) {
    try {
      // Check username is exist
      const userExit = await UserModel.findOne({ 'user-name': data.userName });

      if (userExit) {
        return resDataFormat(200, 'Name-Error', 'Enter the unique user name');
      }

      // Check email is exist
      const emailExit = await UserModel.findOne({ email: data.email });

      if (emailExit) {
        return resDataFormat(200, 'Email-exist-Error', 'Email already exist');
      }

      // create salt
      const salt = await generateSalt();

      const userPassword = await generatePassword(data.password, salt);

      const userCreated = await UserModel.create({
        'user-name': data.userName,
        email: data.email,
        'email-token': crypto.randomBytes(64).toString('hex'),
        password: userPassword,
      });

      const token = await generateToken({ id: userCreated._id });

      // Send Mail fot Verification
      emailVerification(userCreated.email, userCreated['email-token'], host);

      return resDataFormat(200, 'Success', { userCreated, token });
    } catch (err) {
      console.log(err);
    }
  }

  // Check user name userNameExist
  async UserNameExist(userName) {
    const userNameExist = await UserModel.findOne({ 'user-name': userName });

    if (userNameExist) return true;

    return false;
  }

  // Check Email Verification
  async EmailVerification(token) {
    const userNameExist = await UserModel.findOne({ 'email-token': token });

    if (userNameExist) {
      await UserModel.updateOne({
        'email-token': '',
        verify: true,
      });
      return true;
    }

    return false;
  }

  // Verify Email Verification
  async VerifyMail(data) {
    // let userId;
    return verifyToken(data).then(async (response) => {
      const userdata = await UserModel.findById(response.id);
      if (userdata.verify) {
        return 'Verify';
      }

      let expireTime = userdata.createdAt.getTime() + 120000;
      let date = new Date();
      let currentMs = date.getTime();

      if (expireTime <= currentMs) {
        await UserModel.remove({ id: data });
        return 'Delete';
      }
      return 'NotVerify';
    });
  }
}

module.exports = AuthenticationRepository;
