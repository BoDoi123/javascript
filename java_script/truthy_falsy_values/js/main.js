let a = 123;

console.log(typeof a);

let b = String(a);

console.log(typeof b);

console.log("Gia tri cua b la: " + b);

// Giá trị Falsy
let c = Boolean(false);

console.log(c);
console.log(typeof c);

c = Boolean(0);

console.log(c);
console.log(typeof c);

c = Boolean(0n);

console.log(typeof 0n);
console.log(c);
console.log(typeof c);

c = Boolean("");

console.log(c);
console.log(typeof c);

c = Boolean(undefined);

console.log(c);
console.log(typeof c);

c = Boolean(NaN);

console.log(c);
console.log(typeof c);

// Ví dụ: Kiểm tra 1 biến đã được gán giá trị hay undefined
let salary;

console.log(salary);

if (salary) {
    console.log("Salary is defined");
} else {
    console.log("Salary is undefined");
}
