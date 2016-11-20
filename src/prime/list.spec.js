const test = require('tape');
const listPrime = require('./list.js');

test('listPrime', function (t) {
  t.plan(4);
  t.deepEquals(listPrime(2), [2, 3], 'first `2` prime numbers');
  t.deepEquals(listPrime(3), [2, 3, 5], 'first `3` prime numbers');
  t.deepEquals(listPrime(5), [2, 3, 5, 7, 11], 'first `5` prime numbers');
  t.deepEquals(listPrime(0), [], 'empty array');
});
