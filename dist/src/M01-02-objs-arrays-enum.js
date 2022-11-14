"use strict";
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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
const person = {
    name: "Alecsandro",
    age: 46,
    hobbies: ["sports", "cooking"],
    role: Role.Author,
    favoriteRomanticPair: ["Mary", "John"],
};
let favoriteActivities;
favoriteActivities = ["sports"];
let favoriteActivities2;
favoriteActivities2 = ["sports", 1]; // ANY is not recommended
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(Role.Author);
console.log(person.name);
