// Check the data is null
exports.nullValidation = (...datas) => {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i] === '' || datas[i] === undefined || datas[i] === null)
      return true;
  }
  return false;
};
