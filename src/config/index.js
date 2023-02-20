// Require packages
const dotEnv = require('dotenv');

// dotEnv configuration
dotEnv.config();

// All Configuration fields
module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.MONGODB_URI,
  ATLAS_URL: process.env.MONGODB_ATLAS_URI,
  ATLAS_PASS: process.env.MONGODB_ATLAS_PASS,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPR_IN: process.env.JWT_EXPR_IN,
  NODEMAILER_USERNAME: process.env.NODEMAILER_USERNAME,
  NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
  NODEMAILER_HOST_DEV: process.env.NODEMAILER_HOST_DEV,
  NODEMAILER_HOST_PROD: process.env.NODEMAILER_HOST_PROD,
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
  AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
  AWS_S3_NAME: process.env.AWS_S3_NAME,
  AWS_S3_REGION: process.env.AWS_S3_REGION,
};
