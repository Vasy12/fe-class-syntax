'use strict';

class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} age
   */
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const user1 = new User( 'Sasha', 'Ivanov', 24 );
const user2 = new User( 'Dasha', 'Ivanova', 17 );

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

  getSalary() {
    return this.days * this.rate;
  }

}


