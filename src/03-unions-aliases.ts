export type Combinable = number | string; // Type alias

function add(
  n1: Combinable, // Type alias
  n2: number | string, //Union Types
  resultConversion: 'as-number' | 'as-text' // literal type and Union Types
) {  
  let result: number | string;
  if ( resultConversion === "as-text" ) {
    return (result = n1.toString() + n2.toString());
  }
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    return (result = +n1 + +n2);
  }
}

const combineAges = add(20, 50, "as-number");
const combineStringAges = add("20", "50", "as-number");
const combineNumbersAges = add(20, 50, "as-text");
const combineNames = add("Maria", "John", "as-text");

console.log(combineAges);
console.log(combineStringAges);
console.log(combineNumbersAges);
console.log(combineNames);
