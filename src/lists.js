// Lists namespace
var lists = (function() {

    var Node = function(key) {
        this.key = key;
    };

    var ListNode = function(key) {
        Node.call(this, key);
        this.next = null;
        this.prev = null;
    };

    ListNode.prototype = Object.create(Node.prototype);
    ListNode.prototype.constructor = ListNode;

    ListNode.prototype.insertNext = function(node) {
        //currentNode.next = newNode;
        node.next = this.next;
        this.next = node;
    };

    var LinkedList = function() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    // add at beginning O(1), easy
    LinkedList.prototype.addAtBeginning = function(node) {
        if (node instanceof ListNode) {

            if (this.head == null) {
                this.head = node;
                this.tail = node;
            } else if (node != this.head) {
                //this.tail = this.head;
                node.next = this.head;
                this.head = node;
            }

            this.size++;
        } else {
            throw new Error('illegal argument. Must be ListNode');
        }
    };

    //
    // O(n) complexity
    LinkedList.prototype.addAtEnd = function(node) {

        if (node instanceof ListNode) {
            if (this.head == null) {
                this.head = node;
            } else {
                for (var listNode = this.head; listNode.next != null; listNode = listNode.next);
                listNode.next = node;
            }

            this.size++;
        } else {
            throw new Error('no such type of node');
        }
    };



    LinkedList.prototype.addAfter = function(position, node) {
        if (typeof position == 'number' && position <= this.size) {
            for (var _node = this.head, i = 0; i <= position; _node = _node.next, i++);
            _node.insertNext(node);
        } else if (position instanceof ListNode) {
            position.insertNext(node);
        }
    };

    LinkedList.prototype.remove = function(node) {
        for (var prev = this.head; prev != null; prev = prev.next) {
            if (prev.next.key == node.key) {
                break;
            }
        }

        prev.next = node.next;
        node = null;

        // node = something.next
        // something.next = node.next
        // node = null;
    }


    LinkedList.prototype.getTail = function() {
        for (var node = this.head; node != null; node = node.next);
        return node;
    };

    LinkedList.prototype.asArray = function() {
        var array = [];
        for (var node = this.head; node != null; node = node.next) {
            array.push(node.key);
        }
        return array;
    };

    LinkedList.prototype.each = function(callback) {
        if (callback && typeof callback == 'function') {

            for (var _node = this.head, i = 0; _node != null; _node = _node.next, i++) {
                callback.call(this, _node, i, this);
            }
        } else {
            throw new Error('the comparator must have a node argument')
        }
    };

    LinkedList.prototype.find = function(callback) {
        if (callback && typeof callback == 'function') {

            for (var _node = this.head, i = 0; _node != null; _node = _node.next, i++) {
                var result = callback.call(this, _node);
                if (typeof result == 'boolean' && result) {
                    return _node;
                }
            }
        } else {
            throw new Error('the comparator must have a callback function')
        }
    };

    var SingleLinkedList = function() {
        LinkedList.call(this);
        this.prev = null;
    };

    SingleLinkedList.prototype = Object.create(LinkedList.prototype);
    SingleLinkedList.prototype.constructor = SingleLinkedList;

    var DoubleLinkedList = function() {
        LinkedList.call(this);
        this.prev = null;
    };

    DoubleLinkedList.prototype = Object.create(LinkedList.prototype);
    DoubleLinkedList.prototype.constructor = DoubleLinkedList;



    var Hash = function(size) {
        this.table = new Array(size);
    };

    function log2(val) {
        return Math.log(val) / Math.LN2;
    }

    var TreeNode = function(index) {
        this.index = index;
        this.left = null;
        this.right = null;
    }






    return {
        Node: Node,
        ListNode: ListNode,
        LinkedList: LinkedList,
        Heapsort: Heapsort
    }

})();


module.exports.lists = lists;