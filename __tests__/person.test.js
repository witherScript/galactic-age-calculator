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
  });

  const john = new Person("John", 30);
  expect(john.toVenus()).toEqual(48.67);

});