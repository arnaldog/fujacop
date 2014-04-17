var assert = require('assert');

var lists = require('../src/lists'),
    ListNode = lists.lists.ListNode,
    LinkedList = lists.lists.LinkedList,
    Heapsort = lists.lists.Heapsort;

suite('Linked List Module', function() {

    var n1 = new ListNode(1);
    var n2 = new ListNode(2);
    var n3 = new ListNode(3);
    var n4 = new ListNode(4);

    var list = new LinkedList();

    list.addAtEnd(n1);
    list.addAtEnd(n2);
    list.addAtBeginning(n3);
    list.addAtBeginning(n4);

    test("Linked lists insertion", function() {

        var array = [4, 3, 1, 2];
        assert.deepEqual(array, list.asArray());
    });

    test("Linked lists search", function() {

        var found = list.find(function(item) {
            return item.key == 2;
        })

        assert.deepEqual(n2, found)

    });

    test("Linked list add after list position or node", function() {

        var array = []
        list.each(function(node, index, list) {
            array.push(node.key);
        })

        assert.deepEqual([4, 3, 1, 2], array)

    });

    n100 = new ListNode(100);
    test("Linked lists each function", function() {

        list.addAfter(2, n100);
        assert.deepEqual([4, 3, 1, 2, 100], list.asArray())

    });

    test("Remove the 100 element by reference", function() {

        list.remove(n100);
        assert.deepEqual([4, 3, 1, 2], list.asArray())

    });

    test("Heapsort", function() {

        var heapsort = new Heapsort([4, 3, 10, 5, 9, 6, 8, 7, 1, 2]);
        assert.deepEqual([1, 2, 3, 4, 6, 7, 8, 9, 10], heapsort.sort(1, 10))

    });




});