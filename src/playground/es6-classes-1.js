class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let desc = super.getDescription();

    if(this.hasMajor()) {
      desc += ` Their major is ${this.major}.`;
    }

    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }
  
  getGreeting() {
    let greet = super.getGreeting();

    if(this.homeLocation) {
      greet += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greet;
  }
}

const me = new Traveler('Goran', 23, 'Novi Sad');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());