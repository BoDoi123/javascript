let M = ["hoa", "trang", "lan", "mai"];

console.log(typeof M);

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

    // VD2: Phương thức để tính điểm trung bình
    diemTrungBinh: function () {
        sumScores = this.scores.reduce((a, b) => a + b, 0);

        return sumScores / 3;
    },
};

let teacher = {
    "1_fullName": "Jacob",
    "@address": {
        city: "HaNoi",
        country: "VietNam",
    },
};
