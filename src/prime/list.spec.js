const test = require('tape');
const listPrime = require('./list.js');

test('isPrime', function (t) {
  t.plan(3);
  t.deepEquals(listPrime(2), [2, 3], 'first `2` prime numbers');
  t.deepEquals(listPrime(3), [2, 3, 5], 'first `3` prime numbers');
  t.deepEquals(listPrime(5), [2, 3, 5, 7, 11], 'first `5` prime numbers');
});
