'use strict';

const { mockTHREE } = require('ebabel-mocks');
const <%=moduleName%> = require('../src/<%=name%>.js');

let THREE;
let scene;  /* eslint no-unused-vars:0 */

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
});

test('<%=moduleName%> returns something other than undefined.', () => {
  const result = <%=moduleName%>();
  expect(result !== undefined).toBe(true);
});
