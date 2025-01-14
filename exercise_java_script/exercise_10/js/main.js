// Bai tap 34: Viet chuong trinh tinh dien tich cua hinh vuong, hcn, su dung mo hinh ke thua class trong js
class Shape {
    constructor(name) {
        this.name = name;
    }

    calculateArea() {
        return 0;
    }
}

class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.height * this.width;
    }
}

// Tao doi tuong
const sq1 = new Square("Hinh vuong", 5);
const rec1 = new Rectangle("Hinh chu nhat", 4, 6);

// Tinh dien tich va in ra kq
console.log(sq1.calculateArea());
console.log(rec1.calculateArea());

console.log(`Dien tich cua ${sq1.name} la: ${sq1.calculateArea()}`);
console.log(`Dien tich cua ${rec1.name} la: ${rec1.calculateArea()}`);
