const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const {
  JWT_EXPR_IN,
  JWT_SECRET_KEY,
  NODEMAILER_PASSWORD,
  NODEMAILER_USERNAME,
} = require('../config');

//Utility functions
module.exports.generateSalt = async () => {
  return await bcrypt.genSalt();
};

// generatePassword
module.exports.generatePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

// validatePassword
module.exports.validatePassword = async (enteredPassword, savedPassword) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

// Create token
module.exports.generateToken = async (payload) => {
  try {
    return await jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPR_IN });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
  }
};

// Sending mail
module.exports.emailVerification = async (email, token, host) => {
  // create a node transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAILER_USERNAME,
      pass: NODEMAILER_PASSWORD,
    },
  });

  // Sending mail options
  const mailOptions = {
    from: 'NoteHub',
    to: email,
    subject: `Email Verification`,
    html: `<h1>NoteHub</h1><br><h4> Click the link : </h4> <a href="http://${host}/api/auth/verify?token=${token}">verify email</a>`,
  };

  // Send mail
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });
};
