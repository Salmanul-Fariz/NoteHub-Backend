const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_EXPR_IN, JWT_SECRET_KEY } = require('../config');

//Utility functions
module.exports.generateSalt = async () => {
  return await bcrypt.genSalt();
};

module.exports.generatePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports.validatePassword = async (enteredPassword, savedPassword) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

module.exports.generateToken = async (payload) => {
  try {
    return await jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPR_IN });
  } catch (error) {
    console.log(error);
    return error;
  }
};

// module.exports.ValidateSignature = async (req) => {
//   try {
//     const signature = req.get('Authorization');
//     console.log(signature);
//     const payload = await jwt.verify(signature.split(' ')[1], APP_SECRET);
//     req.user = payload;
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };
