// 1. Tạo bản sao của mảng
let M1 = [1, 2, 3];

let M2 = [...M1]; // Toán tử spread

console.log(M2);
// M2 la clone cua M1. Thay doi gia tri cua M2 khong lien quan den M1

M2[0] = 99;

console.log("Mang M2 = " + M2);
console.log("Mang M1 = " + M1);

// 2. Truyen doi so vao ham
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
let result = sum(...numbers);

console.log(result);

// 3. Ket hop mang
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

// 4. Tao mang moi voi them phan tu
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 6];

console.log(M4);

// 5. Chuyen doi iterable thanh mang
let myName = "jacky";
let chars = [...myName];

console.log(chars);
