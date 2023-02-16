const { generateUploadUrl, deleteImageS3 } = require('../../utils/s3');
const S3Repository = require('../../database/repository/user/s3Repository');

const repository = new S3Repository();

class S3Service {
  // GenerateUrl for user workspace page cover
  async GenerateUrlPageCover(req, res) {
    try {
      const { pageId } = req.query;
      const isExist = await repository.CheckImageExist(pageId);

      if (isExist) {
        const url = isExist.split('.com/');
        await deleteImageS3(url[1]);
      }

      const folderName = 'user-workspace-cover';
      const url = await generateUploadUrl(folderName);

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
      const url = await generateUploadUrl(folderName);
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
