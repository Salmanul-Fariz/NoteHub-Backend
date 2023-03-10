const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const {
  JWT_EXPR_IN,
  JWT_SECRET_KEY,
  NODEMAILER_PASSWORD,
  NODEMAILER_USERNAME,
  NODEMAILER_HOST_PROD,
  NODEMAILER_HOST_DEV,
} = require('../config');

// Utility functions
module.exports.generateSalt = async function () {
  return await bcrypt.genSalt();
};

// generatePassword
module.exports.generatePassword = async function (password, salt) {
  return await bcrypt.hash(password, salt);
};

// validatePassword
module.exports.validatePassword = async function (
  enteredPassword,
  savedPassword
) {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

// Create token
module.exports.generateToken = async function (payload) {
  return await jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPR_IN });
};

// Verify token
module.exports.verifyToken = async function (token) {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (err) {
    return undefined;
  }
};

// Sending mail
module.exports.emailVerification = async function (email, token) {
  // create a node transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAILER_USERNAME,
      pass: NODEMAILER_PASSWORD,
    },
  });

  let host;
  if (process.env.NODE_ENV === 'dev') {
    host = NODEMAILER_HOST_DEV;
  } else {
    host = NODEMAILER_HOST_PROD;
  }

  // Sending mail options
  const mailOptions = {
    from: 'NoteHub',
    to: email,
    subject: 'Email Verification',
    html: `<h1>NoteHub</h1><br><h4> Click the link : </h4> <a href="${host}/api/auth/verify?token=${token}">verify email</a>`,
  };

  // Send mail
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      return false;
    }
  });
};
