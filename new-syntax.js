'use strict';

/**
 *
 * number
 * boolean
 * null
 * undefined
 *
 * symbol
 * string
 *
 * bigint
 *
 * Object
 *
 */

class MyArrayIterator {
  /**
   *
   * @param {MyArray} myArray
   */
  constructor(myArray) {
    this._myArray = myArray;
    this._currentIndex = 0;
  }

  next() {
    if (this._currentIndex >= this._myArray.length) {
      return {
        value: undefined,
        done: true,
      };
    }
    return {
      value: this._myArray[this._currentIndex++],
      done: false
    };
  }
}

class MyArray {
  constructor(...args) {
    this.length = 0;
    for (const item of args) {
      this[this.length++] = item;
    }
  }

  [Symbol.iterator]() {
    return new MyArrayIterator( this );
  }

}

const test = new MyArray( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

for (const item of test) {
  console.log( item );
}

const arr = [...test];

class ListItem {
  /**
   *
   * @param {*} value
   * @param {ListItem | null} next
   * @param {ListItem | null} prev
   */
  constructor(value, next = null, prev = null) {

    this._value = value;

    this._next = next;
    this._prev = prev;

  }

  set next(node) {
    if (node instanceof ListItem) {
      this._next = node;
    }
  }

  get next() {
    return this._next;
  }

  set prev(node) {
    if (node instanceof ListItem) {
      this._prev = node;
    }
  }

  get prev() {
    return this._prev;
  }

  get value() {
    return this._value;
  }

}

class LinkedListIterator {
  constructor(list) {
    this._list = list;
    this._currentNode = null;
  }

  next() {
    this._currentNode = this._currentNode
                        ? this._currentNode.next
                        : this._list.head;

    return {
      value: this._currentNode
             ? this._currentNode.value
             : undefined,
      done: !this._currentNode,
    };
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;

    this._head = null;
    this._tail = null;

    for (const item of args) {
      this.push( item );
    }

  }

  get head() {
    return this._head;
  }

  push(v) {
    const newNode = new ListItem( v );

    if (this.length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {

      this._tail.next = newNode;
      newNode.prev = this._tail;

      this._tail = newNode;
    }

    return ++this.length;

  }

  [Symbol.iterator]() {
    return new LinkedListIterator( this );
  }

}

const list = new LinkedList( 1, 2, 3, 4, 5, 6, 7, 8, 9 );

const arr2 = [...list];