// Require packages
const dotEnv = require('dotenv');

// dotEnv configuration
dotEnv.config();

// All Configuration fields
module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.MONGODB_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPR_IN: process.env.JWT_EXPR_IN,
  NODEMAILER_USERNAME: process.env.NODEMAILER_USERNAME,
  NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
};
