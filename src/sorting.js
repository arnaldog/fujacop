/**
 * Insertion Sort for JAvascript
 * Complexity: O(n^2)
 * @param  {Array} array
 * @return {Array}
 */
function insertion_sort(array) {
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

module.exports.insertion_sort = insertion_sort;