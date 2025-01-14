// Bai tap 32: Tao 1 mang 1 chieu gom cac phan tu la so nguyen co n phan tu, n do nguoi dung nhap tu ban phim
function inputArray() {
    let n;

    while (n < 0 || !Number.isInteger(n)) {
        n = Number(prompt("Moi nhap n vao so phan tu cua mang\nLuu y: n phai la so nguyen > 0"));
    }

    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        while (arr[i] < 0 || !Number.isInteger(arr[i])) {
            arr[i] = Number(prompt("Moi nhap vao phan tu thu " + (i + 1) + ":\nLuu y phai la so nguyen > 0"));

            console.log(arr[i]);
        }
    }

    return arr;
}

function printArray(array) {
    console.log(array);
}

/* 
Bai tap 33:

    1. Tao 1 mang 1 chieu gom cac phan tu la so nguyen, co n phan tu ngau nhien, n do nguoi dung nhap tu ban phim

    2. Xuat cac gia tri trong mang

    3. Dao nguoc mang, va xuat mang sau khi dao nguoc

    4. Sap xep mang tang dan

    5. Tinh tong cac phan tu trong mang

    6. Cho nguoi dung nhap 1 so bat ky, kiem tra so do co ton tai trong mang hay khong, neu co xuat ra vi tri index cua so do trong mang
*/
function randomArray() {
    let n;

    while (n < 0 || !Number.isInteger(n)) {
        n = Number(prompt("Nhap so phan tu cua mang\nLuu y: n phai la so nguyen > 0"));
    }

    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(Math.random() * 100);
    }

    return arr;
}

function sortArray(array) {
    let result = array.slice();

    result.sort((a, b) => a - b);

    return result;
}

function reverseArray(array) {
    let resultArr = new Array();

    for (let element of array) {
        resultArr.unshift(element);
    }

    return resultArr;
}

function getSumArr(array) {
    let result = array.reduce((accumulator, currentValue) => accumulator + currentValue);

    return result;
}

function inputNumber() {
    let a;

    while (a < 0 || !Number.isInteger(a)) {
        a = Number(prompt("Nhap so de kiem tra trong mang: "));
    }

    return a;
}

function getIndexOfNumber(number, array) {
    let result = new Array();
    let message = `So ${number} xuat hien tai vi tri index: `;

    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            result.push(i);

            message += i + " ";
        }
    }

    if (result.length === 0) {
        console.log("Khong co so " + number + " trong mang");
    } else {
        console.log(result);
        console.log(message);
    }
}

function main() {
    // Bai tap 32
    let arr = inputArray();

    printArray(arr);

    // Bai tap 33
    let arr2 = randomArray();

    console.log("=== Mang ban dau ===");
    printArray(arr2);

    let reverseArr = reverseArray(arr2);

    console.log("=== Mang sau khi dao nguoc ===");
    printArray(reverseArr);

    let sortedArr = sortArray(arr2);

    console.log("=== Mang sau khi sap xep tang dan ===");
    printArray(sortedArr);

    let sumOfArr = getSumArr(arr2);

    console.log("=== Tong cac phan tu trong mang ===\nTong: " + sumOfArr);

    let number = inputNumber();

    getIndexOfNumber(number, arr2);
}

main();
