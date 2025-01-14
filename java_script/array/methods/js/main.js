// 1. concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = arr1.concat(arr2);

console.log(newArr);

// 2. push()
let arr3 = [1, 2, 3];

arr3.push(4, 5);

console.log(arr3);

// 3. unshift()
let arr4 = [2, 3];

arr4.unshift(0, 1);

console.log(arr4);

// 4. pop()
let arr5 = [1, 2, 3, "nam"];

let removedElement = arr5.pop();

console.log(removedElement);
console.log(arr5);

// 5. shift()
let arr6 = [1, 2, 3];

let removedElement2 = arr6.shift();

console.log(removedElement2);
console.log(arr6);

// slice(startIndex, endIndex)
let arr7 = [1, 2, 3, 4, 5];

let sliceArr = arr7.slice(1, 4); // Cat tu index den 3.

console.log(arr7);
console.log(sliceArr);

// 6. includes()
let arr8 = [1, 2, 3, 4, 5];

let isPresent = arr8.includes(3);
console.log(isPresent);

// 7. indexOf()
let arr9 = [1, 2, 3, 4, 2, 5];

let index = arr9.indexOf(2);

console.log(index);

// 8. lastIndexOf()
let ar10 = [1, 2, 3, 4, 2, 5];

var lastIndex = arr10.lastIndex(2);

console.log(lastIndex);

// 9. reverse()
let arr11 = [1, 3, 5, 7, 9];

arr11.reverse();

console.log(arr11);

// Luu y:
let arr12 = [1, 3, 5, 7, 9];
let arr13 = arr12.slice();

consol.log(arr12);
console.log(arr13);

// 10. join(separator)
// Khong truyen separator
let arr14 = ["Nam", "Trung", 1, 2, 3];
let string1 = arr14.join(); // separator mặc định là dấu ","

console.log(string1);

console.log(typeof string1);

// Co truyen separator
let arr16 = ["Nam", "Trung", 1, 2, 3];
let string2 = arr16.join(" + ");

console.log(string2);
