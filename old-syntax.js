'use strict';

class RangeValidator {

  constructor(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') {
      throw new TypeError();
    }
    if (from > to) {
      throw new RangeError();
    }

    this._from = from;
    this._to = to;
  }

  set from(v) {
    if (typeof v !== 'number') {
      throw new TypeError();
    }
    if (v > this._to) {
      throw new RangeError();
    }

    this._from = v;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(n) {

    if (typeof n !== 'number') {
      throw new TypeError();
    }

    if (n >= this._from && n <= this._to) {
      return n;
    }

    throw new RangeError();

  }

  isValid(n) {
    if (typeof n !== 'number') {
      return false;
    }
    return Boolean( n >= this._from && n <= this._to );
  }

}
