// Response Data Format
exports.resDataFormatError = function (res, statusCode, status, result) {
  res.status(statusCode).json({
    status: status,
    data: result,
  });
};
