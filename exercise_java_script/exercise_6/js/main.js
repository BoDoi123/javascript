// Bai tap 22: Nhap so nguyen n, in ra ket qua n!
function factorial(n) {
    if (n < 0) {
        return -1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Bai tap 23: Giai phuong trinh bac 2
function solveEquation(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        alert("Phuong trinh vo nghiem.");
    } else if (delta === 0) {
        let result = (b * -1) / (2 * a);

        alert("Phuong trinh co 1 nghiem kep = " + result);
    } else {
        let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);

        alert(`Phuong trinh co 2 nghiem lan luot la: x1 = ${x1}, x2 = ${x2}`);
    }
}

// Test
function checkNumber(n) {
    if (isNaN(n) || n % 1 !== 0) {
        return false;
    }

    return true;
}

function inputNumber() {
    let n = Number(prompt("Nhap vao so nguyen duong: "));

    while (!checkNumber(n)) {
        n = Number(prompt("Vui long nhap so nguyen duong."));
    }

    return n;
}

function main() {
    // Test function factorial
    let n = inputNumber();

    let result = factorial(n);

    if (result < 0) {
        alert(`Khong ton tai giai thua cua so nguyen am.`);
    } else {
        alert(`Gia tri ${n}! = ${factorial(n)}`);
    }

    // Test function solveEquation
    let a = inputNumber();
    let b = inputNumber();
    let c = inputNumber();

    solveEquation(a, b, c);
}

main();
