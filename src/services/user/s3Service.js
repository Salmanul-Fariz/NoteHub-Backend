const generateS3Url = require('../../utils/s3');

class S3Service {
  // GenerateUrl for user workspace page cover
  async GenerateUrlPageCover(req, res) {
    try {
      const folderName = 'user-workspace-cover';
      const url = await generateS3Url(folderName);

      res.status(200).json({
        status: 'Success',
        data: url,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GenerateUrl for user workspace page section
  async GenerateUrlPageSection(req, res) {
    try {
      const folderName = 'user-workspace-section';
      const url = await generateS3Url(folderName);
      res.status(200).json({
        status: 'Success',
        data: url,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = S3Service;
