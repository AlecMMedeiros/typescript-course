// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]; // tuple
// } = {
//   name: "Alecsandro",
//   age: 46,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

enum Role {
  Admin, // 0
  Read_Only, // 1
  Author, // 2
}
const person = {
  name: "Alecsandro",
  age: 46,
  hobbies: ["sports", "cooking"],
  role: Role.Author,
};

let favoriteActivities: string[];
favoriteActivities = ["sports"];

let favoriteActivities2: any[];
favoriteActivities2 = ["sports", 1]; // ANY is not recommended

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(Role.Author)

console.log(person.name);
