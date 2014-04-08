 var assert = require('assert');

 var sorting = require('../src/sorting');

 suite('sorting', function() {

     test('Testing insertion sort', function() {
         assert.deepEqual([1, 2, 3, 4], sorting.insertion_sort([4, 2, 3, 1]));
     });

 });