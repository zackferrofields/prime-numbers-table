const test = require('tape');
const isPrime = require('./is.js');

test('isPrime', function (t) {
  t.plan(2);
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const nonPrimeNumbers = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];
  t.true(primeNumbers.every(isPrime), 'are prime numbers');
  t.false(nonPrimeNumbers.some(isPrime), 'not prime numbers');
});
