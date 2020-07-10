'use strict';

class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} age
   */
  constructor(name, surname, age) {
    this._name = name;
    this._surname = surname;

    this.age = age;

  }

  set age(v) {
    if (typeof v !== 'number') {
      throw new TypeError( 'param age must be a number' );
    }

    if (v < 0 || !Number.isInteger( v )) {
      throw new RangeError( 'age value must be positive integer number' );
    }

    this._age = v;
  }

  get age() {
    return this._age;
  }

  /**
   *
   * @returns {boolean} - user adults status
   */
  get isAdult() {
    return this._age >= 18;
  }

  get fullName() {
    return `${this._name} ${this._surname}`;
  }
}

/**
 * Реализуйте класс Worker (Работник),
 * который будет иметь следующие свойства:
 *
 *     name (имя),
 *     surname (фамилия),
 *     rate (ставка за день работы),
 *     days (количество отработанных дней).
 *
 * Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

class Worker {
  constructor(name, surname, rate = 0, days = 0) {

    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

  }

  set days(v) {

    if (typeof v !== 'number') {
      throw new TypeError();
    }
    if (v < 0 || v > 31 || !Number.isInteger( v )) {
      throw new RangeError();
    }

    this._days = v;

  }

  get days() {
    return this._days;
  }

  set rate(v) {

    if (typeof v !== 'number') {
      throw new TypeError();
    }

    if (v < 0) {
      throw new RangeError();
    }

    this._rate = v;
  }

  get rate() {
    return this._rate;
  }

  get salary() {
    return this.days * this.rate;
  }

}

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  get weight() {
    return this.density * this.volume;
  }
}

class Car {
  /**
   *
   * @param {number} weight
   * @param {Fuel} fuel
   */
  constructor(weight, fuel) {
    this.ownWeight = weight;
    this.fuel = fuel;
  }

  get curbWeight() {
    const fuelWeight = this.fuel.weight;
    return this.ownWeight + fuelWeight;
  }

}

const car1 = new Car( 1200, new Fuel( 50, 0.79 ) );

const car1CurbWeight = car1.curbWeight;