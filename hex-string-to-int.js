'use strict';
/**
 * `toHex`
 * Convert string to hex oject
 * @param {str} input string in standard hex format e.g. #cccccc
 * @returns {number} output hex 
 */
const hexStringToInt = (str) => {
  return parseInt(str.replace(/#/g, ''),16);
  // let result = '';
  // for (var i=0; i<str.length; i++) {
  //   result += str.charCodeAt(i).toString(16);
  // }
};

module.exports = hexStringToInt;
