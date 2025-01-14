// 1. Không truyền compareFunction
let M1 = ["b", "a", "c"];

console.log("b".charCodeAt()); // Xem gia tri unicode dung charCodeAt()

for (let element of M1) {
    console.log(`${element} co ma unicode la: ${element.charCodeAt()}`);
}

let sortedM1 = M1.sort();

console.log(sortedM1);

let M2 = ["ba", "a", "c"];

let sortedM2 = M2.sort();

console.log(sortedM2);

//  VD: voi ky tu so (vi sap xep theo unicode nen kq khong nhu mong muon)
let M3 = [10000, 1, 9];

let sortedM3 = M3.sort();

console.log(sortedM3); // [1, 10000, 9]     => Ket qua khong nhu mong doi
console.log("1".charCodeAt()); // 49
console.log("0".charCodeAt()); // 48
console.log("9".charCodeAt()); // 57

// 2. Su dung voi ham so sanh compareFunction
let M4 = [9, 3, 5, 4];

console.log(M4); // Truoc khi sap xep

// Sau khi sap xep tang dan
let sortedM4 = M4.sort((a, b) => a - b);

console.log(sortedM4);

// Sau khi sap xep giam dan
let sortedM5 = M4.sort((a, b) => b - a);

console.log(sortedM5);
