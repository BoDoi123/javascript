// Khai bao mang
let M = new Array();

console.log(typeof M);

console.log(M);

console.log(M.length);

M.push(4);
console.log(M);

console.log(M.toString());

// Doi tuong Student
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

console.log(sv1);

// 3. Xem nguyên mẫu - cha mẹ của đối tượng
console.log("Kiem tra nguyen mau cha me cua doi tuong sv1");

console.log(Object.getPrototypeOf(sv1));

console.log(sv1.__proto__); // Cu nen khong khuyen dung

// Moi ham trong js deu co prototype
console.log("Student.prototype #####:");

console.log(Student.prototype);

// check Student co phai la prototype cua sv1 hay khong
console.log(Student.prototype === Object.getPrototypeOf(sv1));

// Cach khac
console.log(Student.prototype.isPrototypeOf(sv1));

// 4. Them phuong thuc voi Prototype
Student.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

console.log(sv1);
sv1.calcAge();

sv2.calcAge();

// 5. Them thuoc tinh voi Prototype
Student.prototype.email = "noemail@gmail.com";

// Kiem tra thuoc tinh email cua sinh vien
console.log(sv1.email);
console.log(sv2.email);

// Tuy nhien, neu kiem tra sv1 co truc tiep chua thuoc tinh email?
console.log(sv1.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));
