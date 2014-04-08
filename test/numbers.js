 var assert = require('assert');

 var numbers = require('../src/numbers');

 var sorting = require('../src/sorting');


 suite('numbers', function() {
     test('Factors of a given number should return an array with numbers', function() {
         assert.deepEqual([1, 2, 3, 6], numbers.factors(6));
     });

     test('Factors of a given number should return an array with numbers', function() {
         assert.deepEqual([1, 3, 9], numbers.factors(9));
     });

     test('Find a min value of arguments', function() {
         assert.equal(1, numbers.minArgument(1, 100, 99, 1000, 2023));
     });

     test('Find a min value of an array', function() {
         assert.equal(1, numbers.minOfArray([1, 100, 99]));
     });

     test('Find prime factors of a given number', function() {
         assert.deepEqual([2, 2, 3], numbers.primeFactors(12));
     });

     test('Find the factorial for a given number', function() {
         assert.equal(6, numbers.factorial(3));
     });

     test('Find the factorial for a given number using cache', function() {
         assert.equal(120, numbers.factorial(5));
     });

     test('Find the GCD of two given numbers', function() {
         assert.equal(4, numbers.gcd(8, 4));
     });

     test('Assert that two numbers are congruent to modulo', function() {
         assert.equal(true, numbers.congruent(29, 15, 7));
     });

     test('a_1  = b_1 (mod n) => a_1 + c = b_1 + c (mod n). c is constant', function() {
         assert.equal(true, numbers.congruent(29 + 10, 15 + 10, 7));
     });

     test('a_1  = b_1 (mod n) != a_1 * c = b_1 * c (mod n). c is constant', function() {
         assert.equal(false, numbers.congruent(2 * 10, 4 * 10, 6));
     });

     test('Lema 27.1: a_1 = b_1 (mod n) & a_2 = b_2 (mod n) => a_1 * b_1 = a_2 * b_2 (mod n)', function() {

         assert.equal(true, numbers.congruent(8, 36, 7));
         assert.equal(true, numbers.congruent(29, 15, 7));
         assert.equal(true, numbers.congruent(8 * 29, 36 * 15, 7));
     });

     test('Lema 27.2: ( a % n ) = a (mod n)', function() {
         assert.equal(true, numbers.congruent(8 % 7, 8, 7));
     });

 });