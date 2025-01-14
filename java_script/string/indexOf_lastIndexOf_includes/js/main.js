// indexOf(searchValue, fromIndex)
let s25 = "abcdef abcdef";

let s26 = s25.indexOf("c");

console.log(s26);

// Tim "c" nhung bat dau tu index = 3
console.log(s25.indexOf("c", 3));

let notFoundIndex = s25.indexOf("g");

console.log(notFoundIndex);

// lastIndexOf(searchValue, endIndex)
let s27 = "abcdef abcdef";

let s28 = s27.lastIndexOf("a");

console.log(s28);

console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));

// includes(searchValue)
let s29 = "abcdef abcdef";

console.log(s29.includes("a"));

console.log(s29.includes("a", 8));
console.log(s29.includes("g"));
