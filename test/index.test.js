const light = require('../index');

let THREE;
let scene;

beforeEach(() => {
  // Mocking.
  THREE = {
    PointLight: class PointLight {
      constructor() {
        this.position = {
          set: () => {}
        };
      }
    }
  };

  scene = { add: () => {} };
});

test('light default name is as expected when it is not set', () => {
  const result = light({ THREE, scene });
  expect(result.name).toBe('main-light');
});
