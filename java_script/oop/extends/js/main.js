class School {
    constructor(id, name, birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }

    // Phuong thuc cua lop School
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    }
}

// Lop Student ke thu tu lop School
class Student extends School {
    constructor(id, name, birthYear, major) {
        super(id, name, birthYear); // Goi ham constructor cua lop cha.
        this.major = major;
    }

    // Phuong thuc cua lop Student
    study() {
        console.log(`${this.name} is studying ${this.major}`);
    }
}

// Tao doi tuong lop School
const p1 = new School("p2004001", "Jacky", 2000);

// Truy cap thuoc tinh va phuong thuc cua class School
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

// Tao doi tuong cua subClass Student
const s1 = new Student("2004002", "Nguyen Van Nam", 2001, "Computer Science");

// Truy cap thuoc tinh va phuong thuc cua class School
console.log(s1.id);
console.log(s1.birthYear);
console.log(s1.name);
console.log(s1.calcAge(2024));

// Truy cap thuoc tinh va phuong thuc cua subClass Student
console.log(s1.major);
s1.study();
