// Bai tap 7: Tim x, y khi biet tong va hieu cua chung
let sum = Number(prompt("Nhap vao tong 2 so: "));
let difference = Number(prompt("Nhap cao hieu 2 so: "));

let x = (sum + difference) / 2;
let y = sum - x;

console.log(`Gia tri x can tim la: %s`, x);
console.log(`Gia tri y can tim la: %s`, y);

// Bai tap 8: Nhap vao chieu cao, can nang, tinh BMI va xuat ra ket qua
let length = Number(prompt("Nhap vao chieu cao (m): "));
let weight = Number(prompt("Nhap vao can nang (kg): "));

let bmi = weight / Math.pow(length, 2);

console.log(`BMI cua ban = %s`, bmi);

if (bmi < 15) {
    console.log("Than hinh qua gay");
} else if (bmi >= 15 && bmi < 16) {
    console.log("Than hinh gay");
} else if (bmi >= 16 && bmi < 18.5) {
    console.log("Than hinh hoi gay");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Than hinh binh thuong");
} else if (bmi >= 25 && bmi < 30) {
    console.log("Than hinh hoi beo");
} else if (bmi >= 30 && bmi < 35) {
    console.log("Than hinh beo");
} else if (bmi >= 35) {
    console.log("Than hinh qua beo");
}

// Bai tap 9: Nhap vao 1 nam duong lich, kiem tra nam do co phai nam nhuan hay khong.
let year = parseInt(prompt("Nhap vao 1 nam bat ky: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("%s la nam nhuan.", year);
} else {
    console.log("%s la nam khong nhuan.", year);
}

// Bai tap 10: Nhap vao 1 thang bat ky tu 1 - 12 => Cho biet thang bo co bao nhieu ngay?
let month = parseInt(prompt("Nhap vao 1 thang bat ky: "));
let day;

// Kiem tra tinh hop le cua thang nhap vao
if (!isNaN(month) && month >= 1 && month <= 12) {
    if (month === 2) {
        year = parseInt(prompt("Nhap vao 1 nam bat ky: "));

        let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

        if (check) {
            day = 29;
        } else {
            day = 28;
        }

        console.log(`So ngay cua thang %s trong nam %s la: %s`, month, year, day);
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        day = 30;
    } else {
        day = 31;
    }

    if (month != 2) {
        console.log(`So ngay trong thang %s la: %s`, month, day);
    }
} else {
    console.log("Thang khong hop le, Vui long nhap lai tu 1 -> 12");
}

// Bai tap 11: Giai phuong trinh bac 2
let a = Number(prompt("Nhap vao he so thu 1: "));
let b = Number(prompt("Nhap vao he so thu 2: "));
let c = Number(prompt("Nhap vao he so thu 3: "));

let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
    console.log(`Phuong trinh da cho vo nghiem.`);
} else if (delta === 0) {
    let result = (b * -1) / (2 * a);

    console.log(`Phuong trinh da cho co 1 nghiem kep: %s`, result);
} else {
    let x1 = (b * -1 + Math.sqrt(delta)) / (2 * a);
    let x2 = (b * -1 - Math.sqrt(delta)) / (2 * a);

    console.log(`Phuong trinh da cho co 2 nghiem lan luot la: x1 = %s, x2 = %s`, x1, x2);
}

// Bai tap 12: Nhap vao thang trong nam, cho biet thang do thuoc quy may?
month = parseInt(prompt("Nhap vao 1 thang bat ky: "));
let quy;

if (!isNaN(month) && month <= 12 && month >= 1) {
    if (month >= 1 && month < 4) {
        quy = 1;
    } else if (month >= 4 && month < 7) {
        quy = 2;
    } else if (month >= 7 && month < 10) {
        quy = 3;
    } else {
        quy = 4;
    }

    console.log(`Thang %s thuoc quy %s`, month, quy);
} else {
    console.log("Thang khong hop le, Vui long nhap lai tu 1 -> 12");
}
