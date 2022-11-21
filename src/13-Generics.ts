const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Hey Timeout!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function mergeObject<T extends Object, U extends Object>(objA: T, objB: U) {
  // Creating your own generic types with Constraints (extends Object in this case)
  return Object.assign(objA, objB);
}

const merge = mergeObject({ name: "Alec", hobbies: ["Code"] }, { age: 87 });
console.log(merge.name);
console.log(merge.hobbies);
console.log(merge.age);

interface ILength {
  // Creating a interface
  length: number;
}

function countAndDescribe<
  T extends ILength /*T now extends the interface...so any elemente must have a length*/
>(element: T): [T, string] {
  let text = "Got no value";
  if (element.length === 1) {
    text = "Got 1 element";
  } else if (element.length > 1) {
    text = "Got " + element.length + " elements";
  }
  return [element, text];
}

console.log(countAndDescribe("House"));

function extractObjectKey<T extends Object, U extends keyof T>(Obj: T, key: U) {
  return "The value is: " + Obj[key];
}

console.log(extractObjectKey({ name: "Alec" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Alec");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
console.log(numberStorage.getItems());

/// Utility types

interface ICourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): ICourseGoal {
  let courseGoal: Partial<ICourseGoal> = {}; // Patrial type
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as ICourseGoal
  ;
}

const namesList: Readonly<string[]> = ['Alec', 'Andrea'];

// namesList.push('Teste') Will show an error 

