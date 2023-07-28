import Person from '../src/js/person.js';
describe('Person', () => {

  test('should correctly create a person object with a name and age', () => {

    const john = new Person("John", 30);

    expect(john.name).toEqual("John");
    expect(john.age).toEqual(30);

  });

  test('should correctly return a users age in Mercury years', () => {

    const john = new Person("John", 30);
    expect(john.toMercury()).toEqual(124.43);

  });

  test('should correctly return a users age in Venus years', () => {
    const john = new Person("John", 30);
    expect(john.toVenus()).toEqual(48.67);
  });

  test('should correctly return a users age in Mars years', () => {

    const john = new Person("John", 30);
    expect(john.toMars()).toEqual(15.94);

  });

  test('should correctly return a users age in Jupiter years', () => {

    const john = new Person("John", 30);
    expect(john.toJupiter()).toEqual(2.53);

  });

  test('should correctly determine years between birthdays on Earth expressed in all other planets years', () => {

    const john = new Person("John", 30);
    expect(john.yearsBetween(56, 61)).toStrictEqual([5, 20.74, 8.11, 2.66, 0.42]);

  });

});