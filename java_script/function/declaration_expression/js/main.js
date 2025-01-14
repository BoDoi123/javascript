// Function Declaration
function tinhTong(a = 0, b = 0) {
    return a + b;
}

// Goi ham
console.log(tinhTong(5, 3));

// Function Expression
let tich = function (a = 1, b = 1) {
    return a * b;
};

// Goi ham
console.log(tich(3, 5));
