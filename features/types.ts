const calendar = new Date();
console.log(calendar.getHours());

const person = {
  age: 20,
};
console.log(person);

class Person {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
}

const userOne = new Person(20);
console.log(userOne);
