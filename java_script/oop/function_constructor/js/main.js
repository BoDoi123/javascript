// Cach 1: Function Expression (it dung)
const SinhVien = function (fullName, ID, birthYear, hometown) {
    // Thuoc tinh
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.hometown = hometown;

    // Phuong thuc
    this.showInfo = function () {
        return `${fullName} ${ID} ${hometown}`;
    };
};

// Cach 2: Function Declaration (thuong dung hon)
function Student(fullName, ID, birthYear, hometown) {
    // Thuoc tinh
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.hometown = hometown;

    // Phuong thuc
    this.showInfo = function () {
        return `${fullName} ${ID} ${hometown}`;
    };
}

// 2. Tao cac doi tuong cu the tu ham Student
const sv1 = new Student("Nguyen Van A", "2024001", 2005, "Nam Dinh");
const sv2 = new Student("Nguyen Van B", "2024002", 2004, "Ha Noi");

// Truy cap phuong thuc va thuoc tinh
console.log(sv1.showInfo());

console.log(sv1.fullName);
console.log(sv2["fullName"]);

// sv1, sv2 co the goi la cac doi tuong cu the hoac goi la cac instance (the hien)
console.log("Check instance: ");

console.log(sv1 instanceof Student);

let abc = 1;
console.log(abc instanceof Student);

// Them, xoa, sua thuoc tinh
sv2.email = "tuhoc.cc@gmail.com"; // Them thuoc tinh

sv2.name = "Ten da bi sua"; // Sua thuoc tinh

delete sv2.hometown; // Xoa thuoc tinh

console.log(sv2);
