'use strict';

/**
 * `light`
 * Setup a THREE.js PointLight and add it to the scene.
 * @param {Object} input - Parameters and dependencies.
 * @param {Object} input.THREE - Core library of THREE.js
 * @param {Object} input.scene - Scene object where the light will be added.
 * @param {hex?} input.color - Dominant color of the light in hexadecima format. Defaults to pure white 0xffffff.
 * @param {Array?} input.position - 3D coordinates of where the light should be placed. Defaults to [1, 250, 1].
 * @param {String?} input.name - Name of the light. Defaults to 'main-light'.
 * @returns {Object} THREE.PointLight instance.
 */
const light = (input) => {
  const {
    THREE,
    scene,
    position = [1, 250, 1],
    name = 'main-light'
  } = input;

  let color = input.color || 0xffffff;

  const mainLight = new THREE.PointLight(color);
  mainLight.name = name;
  mainLight.position.set(
    position[0],
    position[1],
    position[2]
  );
  scene.add(mainLight);

  return mainLight;
};

module.exports = light;
