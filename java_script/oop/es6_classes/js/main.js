// 2 Cách khai báo class
// Cách 1: class expression (ít dùng hơn)
const SinhVienEx = class {
    // Thuoc tinh
    // Phuong thuc
};

// Cachs 2: Class decoration (Thường dùng hơn)
class SinhVien {
    // Constuctor methhod (phuong thuc duoc JS xay dung san cho class)
    constructor(fullName, ID, birthYear, hometown) {
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.hometown = hometown;
    }

    // Phuong thuc cua class
    // Khong can dung function keyword
    showInfo() {
        return `${this.fullName} ${this.ID} ${this.birthYear} ${this.hometown}`;
    }
}

// Tao doi tuong tu class
const stu3 = new SinhVien("Thomas Edison", 12345, 2000, "New York");
const stu4 = new SinhVien("Thomas", 23456, 2001, "Viet Nam");

console.log(stu3);
console.log(stu3.showInfo());

// Kiem tra nguyen mau cua stu3 chinh la class SinhVien
console.log(Object.getPrototypeOf(stu3));

console.log(Object.getPrototypeOf(stu3) === SinhVien.prototype);

// 3. Them phuong thuc vao class SinhVien thu cong (sau khi co class)
SinhVien.prototype.calcAge = function (currentYear) {
    return currentYear - this.birthYear;
};

console.log(stu3.calcAge(2024));
console.log(stu3);

console.log(stu4.calcAge(2024));
console.log(stu4);
