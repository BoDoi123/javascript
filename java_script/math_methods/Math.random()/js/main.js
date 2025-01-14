// 1. Hàm Math.random Random trong [0 -> 1]
let randomValue = Math.random();

console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: %s`, randomValue);

// 2. Random số lớn hơn 1 bé hơn 10
randomValue = Math.random() * 10;

console.log(`Số ngẫu nhiên lớn hơn 1 là: %s`, randomValue);

// 3. Random số nguyên
randomValue = parseInt(Math.random() * 10);

console.log(`Số nguyên ngẫu nhiên là: %s`, randomValue);

// 4. Random số chạy từ 0 đến sát 30
randomValue = parseInt(Math.random() * 30);

console.log(`Số nguyên ngẫu nhiên từ 0 đến sat 30 là: %s`, randomValue);

// 5. Random số chạy từ 10 đến sát 30
randomValue = parseInt(Math.random() * 21) + 10;

console.log(`Số nguyên ngẫu nhiên từ 10 đến sát 30 là: %s`, randomValue);
