var assert = require("assert")

/**
 * Find the minimal values of an array
 */


function findMin() {
    var _min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (_min > arguments[i]) {
            _min = arguments[i];
        }
    }

    return _min;
}

function min() {
    return findMin.apply(this, arguments);
}

min([3,2,1]) == 1;

/**
 * Type of arguments
 */

function testArguments () {
	var arr = Array.prototype.slice.call(arguments);
	return Array.isArray(arr);
}

testArguments() == 'object';


// Programar el karatzuba
/**
 * x = a_1 D^m + a_0
 * y = b_1 D^m + b_0
 *
 * x*y = (a_1 D^m + a_0) (b_1 D^m + b_0) + z_2 D^2m + z_1 D^m + z_0
 * z_2 = a_1 b_1
 * z_1 = a_1 b_0 + a_0 b_1
 * z_0 = a_0 b_0
 */


function karatzuba(x, y) {
	/**
	 * Check the lenght of the numbers
	 */
	m = ( String(Math.max.call(this, x, y)).length  / 2 ) ;

	return m;

}



describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})