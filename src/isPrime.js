const {add, all, both, compose, flip, gt, modulo, range} = require('ramda');

// Number → Number → Boolean
const flipdGt = flip(gt);

// Number → Number
const naturalSqrt = i => ~~Math.sqrt(i);

// Number → [Number]
const rangeSqrt = compose(range(2), add(1), naturalSqrt);

// Number → Boolean
const isPrime = i => compose(all(modulo(i)), rangeSqrt)(i);

/**
 * Returns `true` if passed a prime number.
 *
 * @func
 * @sig Number → Boolean
 * @param {Number}
 * @return {Boolean}
 * @example
 *
 *  isPrime(1); //→ false
 *  R.range(2);  //→ true
 */
module.exports = both(flipdGt(1), isPrime);
