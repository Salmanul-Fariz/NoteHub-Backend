// Require functions
const { UserModel } = require('../models');
const { resDataFormat } = require('../../utils/formatData');
const {
  generateSalt,
  generatePassword,
  generateToken,
} = require('../../utils/authSecurity');

// Dealing with database operations
class AuthenticationRepository {
  async CreateUser(data) {
    try {
      // Check username is exist
      const userExit = await UserModel.findOne({ 'user-name': data.userName });

      if (userExit) {
        return resDataFormat(400, 'Name-Error', 'Enter the unique user name');
      }

      // create salt
      const salt = await generateSalt();

      const userPassword = await generatePassword(data.password, salt);

      const userCreated = await UserModel.create({
        'user-name': data.userName,
        email: data.email,
        password: userPassword,
      });

      const token = await generateToken({ id: userCreated._id });

      return resDataFormat(200, 'Success', { userCreated, token });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AuthenticationRepository;
