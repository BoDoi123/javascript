// 1. Global Scope
let a = 1;

// Truy xuat
console.log(a);

function viDu_1() {
    console.log(a);

    if (a % 2 === 0) {
        console.log(`${a} la so chan`);
    } else {
        console.log(`${a} la so le`);
    }
}

viDu_1();

// 2. Function Scope
function viDu_2() {
    let b = 2;

    console.log(b);

    if (b % 2 === 0) {
        console.log(`${b} la so chan`);
    } else {
        console.log(`${b} la so le`);
    }
}

// 3. Block Scope
let n = 3;
let m = 10;

if (n === 3) {
    let m = 1;

    console.log(m);

    if (m % 2 === 0) {
        console.log(`${m} la so chan`);
    } else {
        console.log(`${m} la so le`);
    }
}

console.log(m);
