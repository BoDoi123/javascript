// A. Bài toán không dùng reduce()
let M1 = [1, 2, 3];

// Thuc hien tinh tong cac phan tu trong mang
// 1. Gia tri khoi tao ban dau
let sum = 0;

for (let element of M1) {
    sum += element;
}

console.log("Tong = " + sum);

// B. Bai toan tinh tong cac phan tu cua mang dung reduce()
let sum2 = M1.reduce(
    // Tham so thu 1: function
    (accumulator, currentValue, currentIndex, array) => {
        return currentValue + accumulator;
    },
    0
    /*
    Tham so thu 2: initialValue gia tri khoi tao cua accumulator ban dau,

        1. Neu bo trong initialValue:

            a. accumulator se lay gia tri dau tien trong mang lam gia tri khoi tao, 
                va se bat dau thuc hien tu phan tu thu 2.

            b. Neu mang trong ma 0 co gia tri initialValue --> reduce() se bao loi
    */
);

// Rút gọn lại
// initialValue = M1[0] (Neu de initialValue trống)
let sum3 = M1.reduce((accumulator, currentValue) => accumulator + currentValue);
