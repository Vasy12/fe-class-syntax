'use strict';

class User {
  constructor(name, surname, age, email, isBanned = false) {
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._email = email;
    this._isBanned = isBanned;
  }

  set isBanned(v) {
    if (typeof v !== 'boolean') {
      throw new TypeError();
    }
    this._isBanned = v;
  }

  get email() {
    return this._email;
  }

  getFullName() {
    return `${this._name} ${this._surname}`;
  }

  isAdult() {
    return this._age > 17;
  }

}

class Admin extends User {

  constructor(name, surname, age, email) {
    super( name, surname, age, email, false );
  }

  reBan(user) {
    user.isBanned = false;
  }

  ban(user) {
    user.isBanned = true;
  }

}

class Moderator extends User {

  constructor(name, surname, age, email, permission) {
    super( name, surname, age, email );

    this._permission = permission;
  }

  sendMessage(user, message) {

    const userEmail = user.email;
    /*
     * send message code
     * */
  }

}

const user1 = new User( 'Nasme', 'Suisdf', 14, 'test@gmail.com' );

const moder1 = new Moderator( 'Moder', 'Moderovich', 24, 'moder@email.com', {} );

user1.isAdult();
user1.getFullName();

moder1.isAdult();
moder1.getFullName();
moder1.sendMessage( user1, { body: 'Hello' } );
