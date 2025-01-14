// Mang trong JS
// 1. Khai báo mảng
// Cách 1:
let arr1 = [];
console.log(arr1);

let arr2 = [1, 2, "three", true, [2, 3, 5]];
console.log(arr2);

// Cách 2:
let arr3 = new Array();

let arr4 = new Array(1, 2, "three", true);

let arrayWithLength = new Array(5);

console.log(arr3);
console.log(arr4);
console.log(arrayWithLength);

// 2. Truy xuất phần tử
let arr5 = [10, 20, 30, 40];

console.log(arr5[0]);
console.log(arr5[2]);

// 3. Thuộc tính length
console.log(arr5.length);

// 4. Gán, thay đối giá trị qua index
let arr6 = [5, 6, 7];

console.log(arr6);

arr6[1] = 10;

console.log(arr6);

// 5. Duyệt mảng
// Cách 1: Dùng vòng lặp for (Có thể xem và sửa giá trị mảng)
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);

for (let i = 0; i < arr7.length; i++) {
    arr7[i] *= 2;
}

console.log(arr7);

// Cách 2: Sử dụng for ... of. Chỉ có thể xem không thể sửa giá trị của mảng/
let count = 0;
let arr8 = [1, 2, 3, 4, 5];

for (let element of arr8) {
    console.log(element);

    if (element % 2 === 0) {
        count++;
    }
}

console.log("So phan tu chia het cho 2 cua mang: " + count);
