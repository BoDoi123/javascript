// Xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời nhập numberA: ");

// Check thử kiểu dữ liệu của numberA
console.log(typeof numberA);

// Thử thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);

// Cộng A với B
let kq = numberA + numberB;
console.log(`Ket qua A + B = %s`, kq);
console.log(typeof kq);

// Ép kiểu dữ liệu
// Có thể dùng parseInt() hoặc parseFloat()
let numberC = parseFloat(prompt("Mời nhập numberC: "));
console.log(numberC);
console.log(typeof numberC);

console.log(numberC + numberB);

// Hoặc đơn giản dùng hàm Number() để ép kiểu
let numberD = Number(prompt("Mời nhập numberD: "));
console.log(numberD);
console.log(typeof numberD);

console.log(numberD + numberB);
