// Require packages
const express = require('express');
const S3Service = require('../services/s3Service');

const UserAuthorization = require('./middleware/userAuthorization');

const router = express.Router();

// Creating New Object
const service = new S3Service();

// GenerateUrl for user workspace page cover
router.get(
  '/page-cover/generate-url',
  UserAuthorization,
  service.GenerateUrlPageCover
);

// GenerateUrl for user workspace page option
router.get(
  '/page-section/generate-url',
  UserAuthorization,
  service.GenerateUrlPageSection
);

module.exports = router;
