'use strict';

function User(name, surname) {

  this.firstName = name;
  this.lastName = surname;

}

const userProto = new User();

userProto.getFullName = function getFullName() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

const user1 = new User( 'Petryk', 'Piatochkin' );

user1.getFullName();