// 1. Toán tử gán (=): dùng để gán giá trị
let x = 10;
let y = 5;
let z = x + y;
console.log(x);
console.log(y);
console.log(z);

// Gán +=, -=, *=, /=, %=
console.log("Kết quả gán +=, -=, *=, /=, %=");

let m = 10;
m += 5;
console.log(m);

let n = 8;
n -= 3;
console.log(n);

let p = 6;
p *= 2;
console.log(p);

let q = 9;
q /= 3;
console.log(q);

let r = 4;
r %= 3;
console.log(r);

// Bài tập JS 03
let a = 7;

a += 3;
console.log("a=", a);

let b = 15;

b -= 6;
console.log("b=", b);

let c = 5;

c *= 4;
console.log("c=", c);

let d = 12;

d /= 2;
console.log("d=", d);

let e = 5,
    f = 2;

e -= f += 1;
console.log("e=", e);
