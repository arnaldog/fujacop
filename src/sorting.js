/**
 * Insertion Sort for JAvascript
 * Complexity: O(n^2)
 * @param  {Array} array
 * @return {Array}
 */
function insertionSort(array) {
    for (var i = 0; i <= array.length; i++) {
        var j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
}

module.exports.insertionSort = insertionSort;



/**
 * [ 1, 2, 3, 4, 5, 6 ]
 * Binary Search for Javascript
 * T(n) = T(n/2) + c
 * Input binarySearch([1, 2, 3, 4], 0, array.length, 3);
 */
function binarySearch(array, number) {

    var middle = array.length / 2 | 0;

    if (array[middle] == number)
        return true;

    var value = array[middle],
        left = array.splice(0, middle);

    return (number > value) ? binarySearch(array, number) : binarySearch(left, number);

}

module.exports.binarySearch = binarySearch;


function merge(left, array) {
    for (var i = 0; i < left.length; i++) {

    }
}

function merge(array, start, end, middle) {

    for (var i = start; i <= middle; i++) {
        var j = (start == middle) ? i + 1 : i + middle + 1;

        if (array[i] > array[j]) {
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;

            if (array[i] < array[i + 1]) {
                var tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }

        } else if (array[j] < array[i + 1]) {
            var tmp = array[i + 1];
            array[i + 1] = array[j];
            array[j] = tmp;
        }
    }

    return;

}

function mergeSort(array, start, end) {

    var start = start || 0;
    var end = end || array.length - 1;
    var middle = Math.floor((start + end) / 2);

    if (middle == start) {
        merge(array, start, end, middle);
        return;
    } else {
        mergeSort(array, start, middle);
        mergeSort(array, middle + 1, end);

        merge(array, start, end, middle);
    }

    console.log(array)
}

module.exports.mergeSort = mergeSort;