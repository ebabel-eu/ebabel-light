'use strict';
/**
 * `toHex`
 * Convert string to hex oject
 * @param {str} input string in standard hex format e.g. #cccccc
 * @returns {number} output hex 
 */
const hexStringToInt = (str) => parseInt(str.replace(/#/g, ''),16);

module.exports = hexStringToInt;
