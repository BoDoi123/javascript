// Bai tap 15: Nhap so nguyen n, in ra ket qua n!
let n = Number(prompt("Moi nhap vao so nguyen duong n: "));

while (isNaN(n) || n % 1 !== 0 || n < 0) {
    n = Number(prompt("So ban nhap khong hop le. Vui long nhap lai 1 so nguyen duong bat ky: "));
}

let factorial = 1;

for (let i = 2; i <= n; i++) {
    factorial *= i;
}

alert(`Ket qua ${n}! = ${factorial}`);

/*
Bai tap 16: Nhap so a tu ban phim.
- Neu a chan thi tinh tong cac so chan tu 0 -> a
- Neu a le thi in ra dong chu "toi 0 tinh tong le, bye bye" va thoat khoi chuong trinh
*/
while (true) {
    let a = Number(prompt("Moi nhap vao so nguyen duong a: "));

    while (isNaN(a) || a % 1 !== 0 || a < 0) {
        a = Number(prompt("So ban nhap khong hop le, Vui long nhap lai 1 so nguyen duong bat ky: "));
    }

    if (a % 2 !== 0) {
        alert(`Toi khong tinh tong le, bye bye`);

        break;
    } else {
        let result = 0;

        for (let i = 2; i <= a; i += 2) {
            result += i;
        }

        alert(`Tong cac so chan tu 0 den ${a} la: ${result}`);
    }
}

/*
Bai tap 17: Tinh tong cac so le tu 1 -> n, n nhap tu ban phim

    - Nhap n = 7, Bo qua khong cong tong voi so 3 => in ra ket qua

    - Thu break khi vong lap chay den gia tri n = 3.
*/
n = Number(prompt("Moi nhap vao so nguyen duong n: "));

while (isNaN(n) || n % 1 !== 0 || n < 0) {
    n = Number(prompt("So ban nhap khong hop le. Vui long nhap so nguyen duong bat ky: "));
}

result = 0;

for (let i = 1; i <= n; i += 2) {
    if (n === 7 && i === 3) {
        continue;
    }
    // if (i === 3) {
    //     break;
    // }

    result += i;
}

if (n === 7) {
    alert(`Tong cac so le tu 1 -> ${n} ngoai tru 3: ${result}`);
} else {
    alert(`Tong cac so le tu 1 -> ${n} la: ${result}`);
}

// Bai tap 18: Tim nhung so chia het cho 3 tu 10 den 50
result = "";

for (let i = 10; i <= 50; i++) {
    if (i % 3 === 0) {
        result += " " + i;
    }
}

alert(`Nhung so chia het cho 3 tu 10-50 la: ${result}`);

// Bai tap 19: Tinh tong S = 1! + 2! + 3! + ... + 10!
n = 1;
result = 0;

while (n <= 10) {
    factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    result += factorial;

    n++;
}

alert(`Tong can tinh la: ${result}`);

// Bai tap 20: Tim tat ca nhung so hoan hao tu 1 -> 1000
result = "";
n = 1;

while (n <= 1000) {
    let sum_tmp = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum_tmp += i;
        }
    }

    if (sum_tmp === n) {
        result += " " + n;
    }

    n++;
}

alert(`So hoan hao trong pham vi tu 1-1000: ${result}`);

/* 
Bai tap 21: Nhap vao 1 so nguyen a > 0 tu ban phim

    - Cho biet so do co phai la so nguyen to khong

    - Ket thuc chuong trinh hoi nguoi dung: Ban co muon tiep tuc su dung phan mem khong? Neu chon khong thi thoat chuong trinh.
*/
while (true) {
    a = Number(prompt("Moi nhap vao so nguyen duong a: "));

    while (!Number.isInteger(a) || a < 0) {
        a = Number(prompt("Vui long nhap so nguyen a > 0: "));
    }

    alert(`Gia tri a hop le, a = ${a}`);

    let isPrime = true;

    if (a < 2) {
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        alert(`${a} la so nguyen to.`);
    } else {
        alert(`${a} khong phai la so nguyen to.`);
    }

    let option = prompt(`
    Ban co muon tiep tuc su dung phan mem khong? 
    Nhap "no" de thoat
    Bam phim bat ky de tiep tuc
    `);

    if (option.toLowerCase() === "no") {
        break;
    }
}
