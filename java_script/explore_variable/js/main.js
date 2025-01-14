// Các cách xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5;

// Cách 1
console.log("Căn bậc 2 của " + soA + " là: " + soB);

// Cách 2
console.log("Căn bậc 2 của", soA, "là:", soB);

// Cách 3
console.log(`Căn bậc 2 của ${soA} là: ${soB}`);

// Cách 4
console.log(`Căn bậc 2 của %s là: %s`, soA, soB);

// Luyện tập
let a = 4,
    b = 3,
    result = a * b;

console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, result);
