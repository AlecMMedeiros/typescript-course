function add(n1, // Type alias
n2, //Union Types
resultConversion // literal type and Union Types
) {
    var result;
    if (resultConversion === "as-text") {
        return (result = n1.toString() + n2.toString());
    }
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        return (result = +n1 + +n2);
    }
}
var combineAges = add(20, 50, "as-number");
var combineStringAges = add("20", "50", "as-number");
var combineNumbersAges = add(20, 50, "as-text");
var combineNames = add("Maria", "John", "as-text");
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNumbersAges);
console.log(combineNames);
