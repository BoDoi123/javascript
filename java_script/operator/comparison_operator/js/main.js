let a = 1;
let b = 3;
let c = "3";

console.log(typeof b);
console.log(typeof c);

// Các phép toán thông thường
console.log(a > b);
console.log(a < b);

console.log(a <= b);
console.log(a >= b);

console.log(a != b);
console.log(b != c); // Lưu ý

// So sánh bằng == (không quan tâm đến kiểu biến)
console.log(a == b);
console.log(c == b);

// So sánh bằng === (So sánh giá trị và kiểu dữ liệu)
console.log(c === b);
console.log(a === b);

console.log("Phần 2");
console.log(a != b);
console.log(c != b); // (Không quan tâm đến kiểu của biến)

console.log(a !== b);
console.log(c !== b); // So sánh cả giá trị và kiểu dư liệu
