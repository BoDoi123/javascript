// Literal Syntax
let student = {
    // Thuộc tính
    // key có quy tắc giống với quy tắc đặt tên biến
    fullName: "Tran Nhu Nhong",
    birthYear: 2006,
    address: {
        city: "HaNoi",
        country: "VietName",
    },
    scores: [8, 9, 10],

    // Phương thức
    // VD1: Phương thức để lấy tuổi
    getAge: function () {
        return 2024 - this.birthYear;
    },

    // Phuong thuc viet lai de tra ve 1 thuoc tinh
    getAge2: function () {
        this.age = 2024 - this.birthYear;

        return this.age;
    },

    // VD2: Phương thức để tính điểm trung bình
    diemTrungBinh: function () {
        sumScores = this.scores.reduce((a, b) => a + b, 0);

        return sumScores / 3;
    },
};

let teacher = {
    "1 fullName": "Jacob",
    "@address": {
        city: "HaNoi",
        country: "VietNam",
    },
};

// Kiem tra kieu loai
console.log(typeof student);
console.log(typeof teacher);

// Sử dụng dot (.) - Dot Notation
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// Sử dụng - Bracket Notation
// Sử dùng khi gặp tên biến bị sai quy tắc đặt tên
console.log(teacher["1 fullName"]);
console.log(teacher["@address"]);

// Linh động sử dụng [] - Bracket Notation với biến
// let inputKey = prompt("Moi nhap key: (address, scores)");
let inputKey = "address";

console.log("Truy xuat den key dung bien + []");
console.log(student[inputKey]);

// Truy xuất đến 1 key không tồn tai sẽ trả về undefined

// VD: Kiem tra xem neu nhap key khong ton tai thi bao loi
if (student[inputKey]) {
    console.log(student[inputKey]);
} else {
    console.log("inputKey ban nhap khong ton tai");
}

// 3.1 Truy cap phuong thuc
console.log("Tuy cap phuong thuc");

console.log(student.getAge());

console.log(student.diemTrungBinh());

// Giam tai viec bi goi di goi lai, tinh toan nhieu lan phuong thuc getAge()
// Goi phuong thuc getAge2()
student.getAge2();

// Xuat thu tuoi thong qua thuoc tinh age moi duoc them khi goi phuong thuc getAge2()
console.log(student.age);
