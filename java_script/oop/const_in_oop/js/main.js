// Tai sao nen su dung const thay vi let cho Object trong JavaScript
// On tap

// 1. var cho phep tai dinh nghia, con let thi khong
let a = 5;
console.log(a);

a = 9;
console.log(a);

// const
const doSoi = 100;
doSoi = 50;

console.log(doSoi);

// Khai bao doi tuong su dung let
let person = {
    name: "John",
    age: 30,
};

console.log(person);

// Thu thay doi gia tri cua person
person = 5;

console.log(person);

// De tranh dieu nay xay ra, thuong su dung const de khai bao doi tuong
const person1 = {
    name: "John",
    age: 30,
};

console.log(person1);

// Thu thay doi gia tri cua person2
// person1 = 5;

console.log(person1);

// Van co the them, sua, xoa thuoc tinh cua doi tuong person2
person1.isAdmin = true; // Them thuoc tinh

person1.name = "Tom"; // Sua thuoc tinh

delete person1.age; // Xoa thuoc tinh

console.log(person1);
