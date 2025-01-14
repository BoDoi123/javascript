let str = "123";

console.log(typeof str);

let num = Number(str);

console.log(num);
console.log(typeof num);

str = "123abc";

num = Number(str);

console.log(num);
console.log(typeof num);

// Bài toán
let so = Number(prompt("Nhập vào 1 số: "));

console.log(so);

// 2. Hàm isNaN()
let a = 123;

console.log(isNaN(a));

a = "123";

console.log(isNaN(a));

a = "123a";

console.log(isNaN(a));

// Chuyển đổi giá trị true
let b = Number(true);

console.log(b);
console.log(typeof b);
console.log(isNaN(b));

// Chuyển đổi giá trị null sang số
console.log(Number(null));

// Chuyển đổi chuỗi rỗng sang số
console.log(Number(""));
console.log(Number(" "));

// Hàm Number.isNaN(value)
console.log(Number.isNaN(NaN));

console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");

console.log(Number.isNaN(0 / 0));
console.log(0 / 0);

console.log(Number.isNaN(Number.NaN));

console.log(Number.isNaN({}));

console.log(Number.isNaN("pony"));
