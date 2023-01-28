// Require packages
const express = require('express');
const S3Service = require('../../services/user/s3Service');

const UserAuthorization = require('../middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new S3Service();

// GenerateUrl for user workspace page cover
router.get(
  '/page-cover/generate-url',
  UserAuthorization,
  service.GenerateUrlPageCover
);

module.exports = router;