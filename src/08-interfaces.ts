import IGreet from "./interfaces/IGreet";
import IPerson from "./interfaces/IPerson";
import IPersonGreetings from "./interfaces/IPersonGreetings";
import IAddFn from "./interfaces/IAddFn";

let user1: IPerson; // Now you're saying that 'user1' must follow the IPerson structure.
let user2: IPersonGreetings; // Extended Interface;

user1 = {
  name: "Alec",
  age: 46,
};

user2 = {
  name: "Alec",
  age: 46,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`)
  },
};

user2.greet('Wellcome');

class Employee implements IGreet {
  // By 'implementing' IGreet interface, the class has now a 'contract' to follow. In other words, the Employee class is now forced to implements 'name' property and 'greet' method.
  name:string; // The class must have a 'name' property.
  age: number; // Also the class can have more properties or methods.


  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  greet(this: Employee, phrase: string) {
    console.log(`${phrase} ${this.name}!`);
  }
}

let Employee1: IGreet;

Employee1 = new Employee('Sara', 30);

console.log(Employee1);

Employee1.greet('Hello');

let sumFunction: IAddFn;

sumFunction = (n1: number, n2: number ) => {
  return n1 + n2;
}

