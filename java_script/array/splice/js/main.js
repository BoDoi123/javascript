// Loại bỏ phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];

arr11.splice(2, 1); // Xoa tu vi tri index 2, xoa di 2 phan tu

arr11.splice(-2, 1); // Xoa tu vi tri index -2.

console.log(arr11);

// Thêm phần tử vào mảng.
let arr13 = [1, 2, 3, 4, 5];

arr13.splice(2, 0, 6, 7, 8, 9); // Khong loai bo phan tu nao va them phan tu 6, 7, 8, 9 vao vi tri index 2.

console.log(arr13);
