/** @format */

//  steram and buffer to convert inot the base64

// function to encode file data to base64 encoded string
exports.toaBase64 = (file) => {
  //convert binary data to base64 encoded string
  return Buffer.from(file).toString('base64');
};
