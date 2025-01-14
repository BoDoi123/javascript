// Instance Method & Static Method
class Circle {
    // Constructor Method
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        console.log("Phuong thuc draw duoc goi.");
    }

    // Static Method
    static calcArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
}

// Tao doi tuong tu Class
const c1 = new Circle(10);
const c2 = new Circle(5);

c1.draw();
c2.draw();

// Goi phuong thuc tinh
console.log(Circle.calcArea(10));
console.log(Circle.calcArea(5));

// VD de hieu Static Method: Math
a = -10;

console.log(Math.abs(a));
