import IGreet from "./IGreet";


// For interface you can extend multiple interfaces
export default interface IPersonGreetings extends IGreet { // extended version
    name: string;
    age: number;
  }
  