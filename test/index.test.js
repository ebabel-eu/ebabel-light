const { mockTHREE } = require('ebabel-mocks');
const light = require('../index');

let THREE;
let scene;

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
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
  const color = '#cccccc';
  const result = light({ THREE, scene, color });
  expect(result.color).toBe(13421772);
});

test('light with invalid color in string format', () => {
  const color = '#cccccz';

  try {
      light({ THREE, scene, color });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
  } catch (e) {
      expect(e.message).toBe(`Invalid color ${color}`);
  }
});
