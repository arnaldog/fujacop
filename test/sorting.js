 var assert = require('assert');

 var sorting = require('../src/sorting'),
     HeapSort = sorting.sort.HeapSort,
     MergeSort = sorting.sort.MergeSort,
     InsertionSort = sorting.sort.InsertionSort,
     QuickSort = sorting.sort.QuickSort;

 suite('sorting', function() {

     var array = [44, 55, 12, 42, 94, 18, 6, 67];
     var ordered_array = [6, 12, 18, 42, 44, 55, 67, 94];

     var algorithms = [{
             name: 'Insertion Sort',
             instance: new InsertionSort(array)
         }, {
             name: 'Heap Sort',
             instance: new HeapSort(array)
         } // {
         //   name: 'Merge Sort',
         //   instance: new MergeSort(array)
         //}
     ]



     test("Binary search", function() {

         assert.equal(true, sorting.search.binary([1, 2, 3, 4, 8, 12, 23, 43, 5463, 542345, 23452345, 66666666666], 542345));
     });


     test("Insertion Sort", function() {
         assert.deepEqual(ordered_array, (new InsertionSort(array)).sort());
     });

     test("Heap Sort", function() {
         assert.deepEqual(ordered_array, (new HeapSort(array)).sort());
     });

     test("Merge Sort", function() {
         assert.deepEqual(ordered_array, (new MergeSort(array)).sort());
     });

     test("Quick Sort", function() {
         assert.deepEqual(ordered_array, (new QuickSort(array)).sort());
     });




 });