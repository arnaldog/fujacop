var SimpleBuffer = (function SimpleBuffer() {

    /**
     * Private Control variables
     */
    var _buffer = 0,
        size = 0,
        read = 0,
        write = 0,
        count = 0;

    /**
     * Functions
     */
    var isEmpty, isFull, put, pull, init;

    init = function(size) {
        size = size,
        _buffer = new Array(size)
    };

    isEmpty = function() {
        return count === 0;
    }

    isFull = function() {
        return count === size;
    }

    put = function(element) {

        if (isFull()) {
            throw ("Buffer is full")
        }
        _buffer[write] = element;
        write = (write + 1) % size;
        count++;
    };

    get = function(element) {
        if (isEmpty()) {
            throw ("Buffer is empty")
        }

        var value = _buffer[read];
        read = (read + 1) % size;
        read--;
    };


    SimpleBuffer.prototype.constructor = init;
    return {
        get: get,
        put: put,
        isEmpty: isEmpty,
        isFull: isFull,
        init: init
    }



})();

var MyBuffer = function(size) {
    this.array = new Array(size);
    this.capacity = size;
    this.read = 0;
    this.write = 0;
    this.count = 0;
}
MyBuffer.prototype.put = function(val) {

    if (this.full()) {
        throw ("Full MyBuffer")
    };

    this.array[this.write] = val;
    this.write = (this.write + 1) % this.capacity;
    this.count++;
}
MyBuffer.prototype.get = function() {
    if (this.empty()) {
        throw ("Empty MyBuffer")
    }

    var value = this.array[this.read];
    this.read = (this.read + 1) % this.capacity;
    this.count--;

    return value;
}
MyBuffer.prototype.empty = function() {
    return this.count == 0;
}
MyBuffer.prototype.full = function() {
    return this.count == this.capacity;
}
var myBuffer = new MyBuffer(10);
myBuffer.put(5);
console.log(myBuffer.get());