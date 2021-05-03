"use strict";
/* eslint-disable */
const Iter = require('./ListIterator.js');

class Node {
    constructor(elem, prev, next) {
        // inserts this new node between prev and next
        this._elem = elem;
        this._prev = prev;
        this._next = next;
        if (prev != null) {
            prev._next = this;
        }
        if (next != null) {
            next._prev = this;
        }
    }
    element() {
        return this._elem;
    }
}

class DLinkedList {
    constructor() {
        this._header = new Node(null, null, null);
        this._trailer = new Node(null, this._header, null);
        this._header._next = this._trailer;
        this._size = 0;
        this._emptyNodes = [];
    }
    //p is a node
    isFirst(p) {
        return (this._header == p._prev);
    }
    isLast(p) {
        return (this._trailer == p._next);
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    first() {
        if (this.isEmpty()) {
            throw new Error("Invalid first() on an empty List");
        } else {
            return this._header._next;
        }
    }
    last() {
        if (this.isEmpty()) {
            throw new Error("Invalid last() on an empty List");
        } else {
            return this._trailer._prev;
        }
    }
    after(p) {
        if (p._next == this._trailer) {
            throw new Error("Invalid after(p)--off the end");
        }
        return p._next;
    }
    before(p) {
        if (p._prev == this._header) {
            throw new Error("Invalid before(p)--off the front");
        }
        return p._prev;
    }
    replaceElement(p, elem) {
        let oldElem = p._elem;
        p._elem = elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    _newPosition(elem, prev, next) {
        let newNode = null;
        if (this._emptyNodes.length > 0) {
            newNode = this._emptyNodes.pop(); // reuse a node that was previously removed
            newNode._prev = prev;
            prev._next = newNode;
            newNode._next = next;
            next._prev = newNode;
            newNode._elem = elem;
        } else {
            newNode = new Node(elem, prev, next);
        }
    }
    insertAfter(p, elem) {
        let newNode = this._newPosition(elem, p, p._next);
        this._size++;
        return newNode;
    }
    insertBefore(p, elem) {
        return this.insertAfter(p._prev, elem);
    }
    insertFirst(elem) {
        return this.insertAfter(this._header, elem);
    }
    insertLast(elem) {
        return this.insertAfter(this._trailer._prev, elem);
    }
    remove(p) {
        p._prev._next = p._next;
        p._next._prev = p._prev;
        let elem = p.element();
        p._prev = null;  // should no longer reference a Position in the List
        p._next = null;
        p._elem = null;
        this._emptyNodes.push(p);  // save p for later re-use
        this._size--;
        return elem;
    }

    findKth(linkedList, k) { //k = 3
        let index = 0;
        let current = linkedList.first(); // 4 7 8 4 9 2

        while (!linkedList.isLast(current)) {
            if (k === index) {
                return current.element();
            }
            current = linkedList.after(current);
            index++;
        }
    }

    removeMiddle(linkedList) {
        let index = 0;
        let middle = 0;
        let i = 0;

        let current = linkedList.first();

        while (!linkedList.isLast(current)) {
            index++;
            current = linkedList.after(current);
        }
        if (index % 2 === 0) {
            middle = (index / 2) - 2;
        }
        middle = Math.floor(index/2);

        current = linkedList.first();

        while (!linkedList.isLast(current)) {
            if (middle === i) {
                linkedList.remove(current);
                return;
            }
            current = linkedList.after(current);
            i++;
        }
    }

    secondSmallest () {
        if (this._trailer._prev === this._header) {
            return;
        }
        
    }

    toString() {
        let res = "[";
        let iter = this.elements();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        res = res + "]";
        return res;
    }
    print() {
        console.log(this.toString());
    }
    elements() {
        return new Iter.ListIterator(this, 1);
    }
    positions() {
        return new Iter.ListIterator(this, 2);
    }
}

class Stack extends DLinkedList {
    constructor () {
        super()
    }
    push (elem) {      

        if (this._trailer._prev === this._header) {
            this.insertFirst(elem);
            this._size++;
        }
        else {
            this.insertAfter(this.last(), elem);
            this._size++;
        }        
        return this.size(); 
    }

    pop () {
        if (this._trailer._prev === this._header) {
            return;
        }
        else {
            return this.remove(this.last());
        }
    }
}

class Queue extends DLinkedList {
    constructor() {
        super();
    }

    enqueue (elem) {
        if (this._trailer._prev === this._header) {
            this.insertFirst(elem);
            this._size++;
        }
        else {
            this.insertAfter(this.last(), elem);
            this._size++;
        }        
        return this.size(); 
    }

    dequeue () {
        if (this._trailer._prev === this._header) {
            return;
        }
        else {
            return this.remove(this.first());
        }
    }
}

let linkedList = new DLinkedList();
linkedList.insertLast(4);
linkedList.insertLast(8);
linkedList.insertLast(7);
linkedList.insertLast(9);
linkedList.insertLast(2);
linkedList.insertLast(6);
console.log(linkedList.findKth(linkedList, 2));
// doubleLinkedList.removeMiddle(linkedList);
// console.log(linkedList.toString());

// let stack = new Stack();
// stack.push(7);
// stack.push(8);
// stack.push(3);
// stack.pop();
// stack.pop();
// stack.push(5);
// console.log(stack.pop());
// console.log(stack.toString());

// let queue = new Queue();
// queue.enqueue(6);
// queue.enqueue(4);
// queue.enqueue(9);
// console.log(queue.dequeue());
// queue.enqueue(7);
// console.log(queue.dequeue());
// console.log(queue.toString());


exports.DLinkedList = DLinkedList;
