// Response Data Format
exports.resDataFormat = (statusCode, status, result) => {
  return {
    statusCode: statusCode,
    status: status,
    result: result,
  };
};
