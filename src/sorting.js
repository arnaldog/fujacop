
var search = (function(){

    return {
        dummy: function(array, number) {
            for(var i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    return true;
                }
            }
            return false;
        },
        /**
         * [ 1, 2, 3, 4, 5, 6 ]
         * Binary Search for Javascript
         * T(n) = T(n/2) + c
         * Input binary([1, 2, 3, 4], 0, array.length, 3);
         */
        binary: function binary(array, number) {
            var middle = array.length / 2 | 0;

            if (array[middle] == number)
                return true;

            var value = array[middle],
                left = array.splice(0, middle);

            return (number > value) ? binary(array, number) : binary(left, number);
        }
    }
})();

module.exports.search = search;


var sort = (function(){

    var merge = function(left, right) {
        var _merge = [],
            i = 0,
            j = 0;

        while (i < left.length || j < right.length) {
            if (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    _merge.push(left[i]);
                    i++;
                } else {
                    _merge.push(right[j]);
                    j++;
                }
            } else if (i == (left.length - 1)) {
                _merge.push(left[i]);
                i++;
            } else {
                _merge.push(right[j]);
                j++;
            }
        }

        return _merge;

    }

    var swap = function(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }


    return {
        mergesort: function mergesort(array) {
            if (array.length == 1) return array;

            var length = array.length,
                middle = ~~ length / 2 ;
                left = array.splice(0, middle);

            return merge(mergesort(left), mergesort(array));
        },

        insertion: function(array) {
            for(var i = 1; i < array.length; i++) {
                var j = i;
                while( j > 0 && array[j - 1] > array[j]) {
                    swap(array, j, j - 1);
                    j--;
                }
            }
            return array;
        }
    }
})()



module.exports.sort = sort;