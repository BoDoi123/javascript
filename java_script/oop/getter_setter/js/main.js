class School {
    constructor(id, name, birthYear, score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score;
        // Them dau _ vao truoc ten thuoc tinh de the hien no o trang thai protected
        // va khong nen truy cap, sua doi truc tiep tu ben ngoai.
    }

    // Phuong thuc
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    }

    // Getter cho thuoc tinh score
    get score() {
        return this._score;
    }

    // Setter cho thuoc tinh score
    set score(value) {
        // Thêm các biểu thức logic để kiểm tra
        if (value >= 0 || value <= 100) {
            this._score = value;
        } else {
            console.log("Diem so khong hop le");
        }
    }
}

// Tao doi tuong
const john = new School("p2024001", "John", 2001, 95);

console.log(john.id);
console.log(john.name);
console.log(john.birthYear);
console.log(john._score); // Khong nen truy cap truc tiep tu ben ngoai

console.log(john.calcAge(2024));

// Su dung Getter
console.log(john.score);

// Su dung Setter
john.score = 75;

console.log(john.score);
