'use strict';

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length++] = arguments[i];
  }
}

MyArray.isMyArray = function (obj) {
  return obj instanceof this;
};

MyArray.prototype = {
  length: 0,
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  },
  concat() {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push( this[i] );
    }

    for (let i = 0; i < arguments.length; i++) {
      if (MyArray.isMyArray( arguments[i] )) {
        for (let j = 0; j < arguments[i].length; j++) {
          result.push( arguments[i][j] );
        }
        continue;
      }
      result.push( arguments[i] );
    }

    return result;
  },
  flat(dept = 1) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (MyArray.isMyArray( this[i] ) && dept > 0) {
        const tmp = this[i].flat( dept - 1 );
        result = result.concat( tmp );
      } else if (this[i] !== undefined) {
        result.push( this[i] );
      }
    }
    return result;
  },
};

const arr = new MyArray(
  new MyArray(
    1,
    undefined,
    1,
  ),
  0,
  undefined,
  0,
  0,
  new MyArray(
    1,
    undefined,
    undefined,
    1,
    new MyArray(
      2,
      new MyArray(
        undefined,
        undefined,
        3,
        3,
        3,
      ),
      undefined,
      2,
      2,
    ),
    1,
  )
);

const flattedArr = arr.flat();
