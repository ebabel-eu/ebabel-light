const hexStringToInt = require('../hex-string-to-int.js');
const light = require('../index');

let THREE;
let scene;

beforeEach(() => {
  // Mocking.
  THREE = {
    PointLight: class PointLight {
      constructor(color) {
        this.position = {
          set: () => {}
        };
        // mock three.js which does implicit string to hex conversion
        if (typeof color === 'string') {
          var isValidColor  = /^#[0-9A-F]{6}$/i.test(color);
          if (isValidColor) {
            this.color= hexStringToInt(color);
          } 
          else {
            throw new Error(`Invalid color ${color}`);
          }
        }
        else {
          this.color=color;
        }
      }
    }
  };

  scene = { add: () => {} };
});

test('light default name is as expected when it is not set', () => {
  const result = light({ THREE, scene });
  expect(result.name).toBe('main-light');
});


test('light with non-default color', () => {
  const color = 0xcccccc;
  const result = light({ THREE, scene, color });
  expect(result.color).toBe(0xcccccc);
});

test('light with valid color but in string format three.js handles this', () => {
  // conversion tested '#cccccc' -->> 0xcccccc
  const color = '#cccccc';
  const result = light({ THREE, scene, color });
  //console.log(`1: ${JSON.stringify(result)}`); /* eslint no-console: 0 */ 
  expect(result.color).toBe(13421772);
});

test('light with invalid color in string format', () => {
  const color = '#cccccz';
  // //const result = light({ THREE, scene, color });
  // expect(() => light({ THREE, scene, color }).toThrow('Invalid color dfsdfs' + color));

  try {
      light({ THREE, scene, color });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
  } catch (e) {
      expect(e.message).toBe(`Invalid color ${color}`);
  }

});


