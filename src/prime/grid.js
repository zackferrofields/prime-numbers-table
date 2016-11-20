const {map, ap, splitEvery, multiply, add, pipe, compose} = require('ramda');
const listPrimes = require('./list.js');

// Number → [[Number]]
const primeGrid = i => pipe(
  listPrimes(1),
  x => ap(map(multiply, x), x),
  splitEvery(i)
)(i);

/**
 * Returns a multi-dimensional of `x` + 1 prime tables.
 *
 * @func
 * @sig Number → [[Number]]
 * @param {Number} Dimension
 * @return {Array.<Number[]>}
 * @example
 *
 *  primeGrid(1);  //→ [[1,2],[2,4]]
 *  primeGrid(2);  //→ [[1,2,3],[2,4,6],[3,6,9]]
 */
module.exports = compose(primeGrid, add(1));
