const aws = require('aws-sdk');
const crypto = require('crypto');

const {
  AWS_S3_ACCESS_KEY,
  AWS_S3_SECRET_ACCESS_KEY,
  AWS_S3_NAME,
  AWS_S3_REGION,
} = require('../config');

const region = AWS_S3_REGION;
const bucketName = AWS_S3_NAME;
const accessKeyId = AWS_S3_ACCESS_KEY;
const secretAccessKey = AWS_S3_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

// generate upload URL
module.exports = async (folder) => {
  const rawBytes = await crypto.randomBytes(16);
  const imageName = rawBytes.toString('hex');
  const params = {
    Bucket: bucketName,
    Key: `${folder}/${imageName}.jpg`,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
};
