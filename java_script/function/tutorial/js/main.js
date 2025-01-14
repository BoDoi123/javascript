// function voi tham so (parameter)
let inputName = prompt("Moi nhap vao ten cua ban: ");

function hello2(name) {
    console.log(`Chao mung ${name} den voi tuhoc.cc`);
}

hello2(inputName);
hello2("Bodoi Badao");

// Bai toan: Tinh tong cua 2 so
function getSum(a, b) {
    return a + b;
}

console.log(getSum(5, 7));

let math = 8;
let literature = 9.5;

let sum_score = getSum(math, literature);

console.log(`Tong diem = ${sum_score}`);

console.log(`Diem trung binh = ${sum_score / 2}`);

// 2. Truyen gia tri mac dinh
function getSum2(a = 0, b = 0) {
    return a + b;
}

console.log(getSum2(10));
