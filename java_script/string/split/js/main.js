let fruits = "apple,orange,banana,grape";

let fruitArray = fruits.split(",");

console.log(fruitArray);
// Output: ["apple", "orange", "banana", "grape"];

console.log(typeof fruitArray);

let fruitArray2 = fruits.split(",", 3);

console.log(fruitArray2);
// Output: ["apple", "orange", "banana"];

// VD2:
let students = "Hoa,Lan,Huệ,Trung";

let arr = students.split(",");

console.log(arr);

let arr2 = students.split(",", 3);

console.log(arr2);

// VD3:
let str = "abcdefgh 1234";

let arr3 = str.split("");

console.log(str);
