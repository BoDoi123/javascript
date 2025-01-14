// Function Expression
let multiply = function (a, b) {
    return a * b;
};

// Goi ham
console.log(multiply(5, 4));

// Arrow Function
let multiplyArrow = (a, b) => a * b;

// Goi ham
console.log(multiplyArrow(5, 5));

// Trường hợp hàm phức tạp cần thêm khối code trong {}
// Function Expression
let multiplyAndAdd = function (a, b) {
    let product = a * b;
    let sum = a + b;

    return sum + product;
};

// Goi ham
console.log(multiplyAndAdd(3, 5));

// Arrow Function
let multiplyAndAddArrow = (a, b) => {
    let product = a * b;
    let sum = a + b;

    return sum + product;
};

// Goi ham
console.log(multiplyAndAddArrow(3, 5));
