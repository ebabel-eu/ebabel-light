const hexStringToInt = require('../hex-string-to-int');


test('convert hex string #cccccc to int 13421772 ', () => {
  // conversion tested '#cccccc' -->> 0xcccccc
  const color = '#cccccc';
  expect(hexStringToInt(color)).toBe(13421772);
});


