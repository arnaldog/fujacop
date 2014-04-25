var search = (function() {

    return {
        dummy: function(array, number) {
            for (var i = 0; i < array.length; i++) {
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


var sort = (function() {

    var Sort = function(array) {
        this.array = JSON.parse(JSON.stringify(array)) || []; // clone object
    };

    Sort.prototype.sort = function() {
        throw ("this method must be implemented");
    };

    Sort.prototype.swap = function(i, j) {
        var tmp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = tmp;
    }

    /**
     * Insertion Sort Algorithm
     * @param {Array} array Unordered array
     */
    var InsertionSort = function(array) {
        Sort.call(this, array);
    };

    InsertionSort.prototype = Object.create(Sort.prototype);

    InsertionSort.prototype.constructor = InsertionSort;

    InsertionSort.prototype.sort = function() {

        for (var i = 1; i < this.array.length; i++) {
            var j = i;
            while (j > 0 && this.array[j - 1] > this.array[j]) {
                this.swap(j, j - 1);
                j--;
            }
        }

        return this.array;
    }


    /**
     * MergeSort
     * @param {Array} array unordered array
     */
    var MergeSort = function(array) {
        Sort.call(this, array);
    }

    MergeSort.prototype = Object.create(Sort.prototype)
    MergeSort.constructor = MergeSort;

    MergeSort.prototype.merge = function(left, right) {
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
            } else if (i <= (left.length - 1)) {
                _merge.push(left[i]);
                i++;
            } else if (j <= (right.length - 1)) {
                _merge.push(right[j]);
                j++;
            }
        }

        return _merge;

    }

    MergeSort.prototype.recursion = function(array) {
        if (array.length == 1) {
            return array;
        }

        var length = array.length,
            middle = ~~ length / 2,
            left = array.splice(0, middle);

        return this.merge(this.recursion(left), this.recursion(array))

    }

    MergeSort.prototype.sort = function() {
        return this.recursion(this.array);
    }


    /**
     * HeapSort
     * @param {Array} array unordered array
     */
    var HeapSort = function(array) {
        Sort.call(this, array);

    };

    /*
     * Object Inheritance
     */
    HeapSort.prototype = Object.create(Sort.prototype);

    HeapSort.prototype.constructor = HeapSort;

    HeapSort.prototype.siftdown = function(k, n) {

        for (var i = k, j = i << 1; j < n; i = j, j = i << 1) {

            if ((j + 1) <= n && this.array[j] < this.array[j + 1]) {
                j++; // nos vamos por la izquierda
            }

            if (this.array[j] < this.array[i]) {
                break;
            }

            this.swap(i, j);
        }

    }

    HeapSort.prototype.sort = function() {
        this.array.splice(0, 0, null);
        // Crear todos los heaps
        var n = this.array.length - 1;

        for (var i = n; i > 0; i--) {

            this.siftdown(i, n);
        }


        for (var i = n; i > 1; i--) {
            this.swap(1, i);
            this.siftdown(1, i - 1);
        }

        this.array.shift();
        return this.array;
    };


    var QuickSort = function(array) {
        Sort.call(this, array);
    };

    QuickSort.prototype = Object.create(Sort.prototype);
    QuickSort.prototype.constructor = QuickSort;

    QuickSort.prototype.recursion = function(i, j) {

        var l = i;
        var r = j;
        var _p = (i + j) / 2 | 0;

        do {
            while (this.array[i] < this.array[_p]) i++;
            while (this.array[j] > this.array[_p]) j--;


            if (i <= j) {
                this.swap(i, j);
                i++;
                j--;
            }
        }
        while (i <= j);


        if (l < j) this.recursion(l, j);
        if (i < r) this.recursion(i, r)
    }
    QuickSort.prototype.sort = function() {
        this.recursion(0, this.array.length - 1);
        return this.array
    }


    return {
        MergeSort: MergeSort,
        InsertionSort: InsertionSort,
        HeapSort: HeapSort,
        QuickSort: QuickSort
    }
})()



module.exports.sort = sort;