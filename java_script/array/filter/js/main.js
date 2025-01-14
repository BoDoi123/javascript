let numbers = [1, 2, 3, 4, 5];

// Tim so chan trong mang
let evenNumbers = numbers.filter(
    // Arrow Function
    (value, index, array) => value % 2 === 0
);

console.log(evenNumbers); 
