const test = require('tape');
const gridPrime = require('./grid.js');

test('gridPrime', function (t) {
  t.plan(1);
  const grid = [
    [1,2,3,5],
    [2,4,6,10],
    [3,6,9,15],
    [5, 10, 15, 25]
  ];
  t.deepEquals(gridPrime(3), grid, '4x4 grid');
});
