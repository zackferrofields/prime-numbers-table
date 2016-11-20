const { until, lte, gte, propSatisfies, add, last, compose, append, unapply, always, ifElse, } = require('ramda');
const isPrime = require('./is.js');

// [Number] → Number
const nextPrime = compose(until(isPrime, add(1)), add(1), last);

// [Number] → [Number]
const listPrimes = list => append(nextPrime(list), list);

// Number → [Number] → [Number]
const untilPrimes = x => until(propSatisfies(lte(x), 'length'), listPrimes);

/**
 * Returns a list of `x` prime numbers.
 *
 * @func
 * @sig Number → [Number]
 * @param {Number}
 * @return {Number[]}
 * @example
 *
 *  untilPrimes(0); //→ []
 *  untilPrimes(3);  //→ [2, 3, 5]
 */
module.exports = ifElse(
  gte(0),
  always([]),
  compose(fn => fn(2), unapply, untilPrimes)
);
