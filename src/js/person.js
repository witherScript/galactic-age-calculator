export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toMercury() {
    return parseFloat(((this.age * 365) / 88).toFixed(2));
  }

  toVenus() {
    return parseFloat(((this.age * 365) / 225).toFixed(2));
  }

  toMars() {
    return parseFloat(((this.age * 365) / 687).toFixed(2));
  }

}