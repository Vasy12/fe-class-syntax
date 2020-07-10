'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get isAdult() {
    return this.age >= 18;
  }

  static isUser(obj) {

    return obj instanceof User;
  }

  static isAdult(obj) {
    if (!User.isUser( obj )) {
      throw new TypeError();
    }
    return obj.isAdult;
  }

}

const user1 = new User( 'Test', 18 );

User.isUser( user1 );

const obj1 = {
  isF() {

  }
};

const obj2 = {
  isF() {

  }
};
