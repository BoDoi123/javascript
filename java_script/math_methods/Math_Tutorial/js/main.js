// 1. Hàm Math.sqrt()
let a = Math.sqrt(4);

console.log(a);

// 2. Hàm Math.pow()
let b = Math.pow(2, 3);

console.log(b);

// 3. Hàm Math.abs()
let c = Math.abs(-10);

console.log(c);

// 4. Hàm Math.ceil() và Math.floor()
let d = Math.ceil(5.004);

console.log(d);

d = Math.floor(5.004);

console.log(d);

// 5. Hàm Math.round(), làm tròn từ 0.5 lên thành 1
let e = Math.round(7.49);

console.log(e);

e = Math.round(7.5);

console.log(e);

// 6. Dùng hàm toFixed()
let f = 3.14159;

// Kiểu dữ liệu trả về là string
let fRounded = f.toFixed(2);

console.log(fRounded);
console.log(typeof fRounded);

// Cần ép kiểu để có kiểu dữ liệu là number
let g = Number(f.toFixed(2));

// 7. Hàm Math.min() và Math.max()
let h = Math.max(1, 2, 3, 5, 8, 4, 80, 100);

console.log(h);

h = Math.min(1, 2, 3, 5, 8, 4, 80, 100);

console.log(h);
