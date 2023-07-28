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

  toJupiter() {
    return parseFloat(((this.age * 365) / 4333).toFixed(2));
  }

  yearsBetween(birthday1, birthday2) {
    let earthYears = birthday2 - birthday1;
    let mercuryYears = parseFloat(((earthYears * 365) / 88).toFixed(2));
    let venusYears = parseFloat(((earthYears * 365) / 225).toFixed(2));
    let marsYears = parseFloat(((earthYears * 365) / 687).toFixed(2));
    let jupiterYears = parseFloat(((earthYears * 365) / 4333).toFixed(2));
    return [earthYears, mercuryYears, venusYears, marsYears, jupiterYears];
  }



}