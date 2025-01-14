// 1. Object.keys(obj)
let person = {
    name: "John",
    age: 30,
};

let keys = Object.keys(person);

console.log(keys);

// 2.Object.values(obj)
let person2 = {
    name: "John",
    age: 30,
};

let values = Object.values(person2);

console.log(values);

// 3. Object.entries(obj)
let person3 = {
    name: "John",
    age: 30,
};

let entries = Object.entries(person3);

console.log(entries);

// 4. Object.assign(target, source)
const target = { c: 100 };
const source1 = { a: 1 };
const source2 = { b: 2 };

Object.assign(target, source1, source2);

console.log(target);

// Su dung toan tu spread de sao chep thuoc tinh
const target2 = { ...source1, ...source2 };

console.log(target2);

// 5. Object.hasOwnProperty(prop)
let person4 = {
    name: "John",
    age: 30,
};

console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("job"));

// 6. Object.freeze(obj)
let person5 = {
    name: "John",
    age: 30,
};

Object.freeze(person5);

// Them thuoc tinh
person5.email = "abc@gmail.com";

// Xoa thuoc tinh
delete person5.age;

// Sua thuoc tinh
person5.age = 31;

console.log(person5);

// 7. Object.seal(obj)
let person6 = {
    name: "John",
    age: 30,
};

Object.seal(person6);

// Them thuoc tinh
person6.location = "HaNoi";

// Xoa thuoc tinh
delete person6.age;

// Chi co the sua thuoc tinh
person6.age = 31;

console.log(person6);
