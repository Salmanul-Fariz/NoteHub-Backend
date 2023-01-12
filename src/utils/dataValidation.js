// Check the data is null
exports.nullValidation = (...datas) => {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i] === '' || datas[i] === undefined || datas[i] === null)
      return true;
  }
  return false;
};

//
exports.userNameValidation = (data) => {
  const output = [];
  for (let i = 0; i < data.length; i++) {
    const code = data.charCodeAt(i);
    if ((code > 47 && code < 58) || (code > 96 && code < 122)) {
      if (code !== 32) {
        output.push(code);
      }
    }
  }
  if (output.length === data.length) {
    return true;
  }
  return false;
};
