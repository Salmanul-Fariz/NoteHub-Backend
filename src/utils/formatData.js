// Response Data Format
exports.resDataFormat = function (statusCode, status, result) {
  return {
    statusCode: statusCode,
    status: status,
    result: result,
  };
};
