
describe('Person', () => {

  test('should correctly create a person object with a name and age', () => {

    const john = new Person("John", 30);

    expect(john.name).toEqual("John");
    expect(john.age).toEqual(30);

  });



});