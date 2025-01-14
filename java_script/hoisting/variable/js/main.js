console.log("Gia tri cua bien c = " + c);

// Khoi tao
var c = 9;

// Cach js hieu
/*
var c;

console.log("Gia tri cua bien c = " + c);

c = 9;
*/

// var: co pham vi la function scope
function exampleVar() {
    if (true) {
        var y = 20;

        console.log(`Khoi tao ${y} trong block scope`);
    }

    console.log(`Khoi tao ${y} trong block scope`);
}

exampleVar();

// JS hiểu
function exampleVar() {
    var y; // Hoisting
    if (true) {
        y = 20;

        console.log(`Khoi tao ${y} trong block scope`);
    }

    console.log(`Khoi tao ${y} trong block scope`);
}

exampleVar();

// let, const: co pham vi la block scope
function exampleLet() {
    if (true) {
        let b = 40;

        console.log(`${b} trong block scope`);
    }
}

// Re-declaration:
// var
var diemToan;
var diemToan;

// let
let diemVan
// let diemVan;
