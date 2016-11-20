const test = require('tape');
const listPrimes = require('./list.js');

test('listPrime', function (t) {
  t.plan(4);
  const from2 = listPrimes(2);
  const from5 = listPrimes(5);
  t.deepEquals(from2(2), [2, 3], 'first `2` prime numbers');
  t.deepEquals(from2(3), [2, 3, 5], 'first `3` prime numbers');
  t.deepEquals(from5(3), [5, 7, 11], 'next `3` prime numbers');
  t.deepEquals(from2(0), [], 'empty array');
});
