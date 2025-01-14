function cong(a, b) {
    return a + b;
}

function nhan(x, y) {
    return x * y;
}

function congNhan(num1, num2, num3) {
    let sum = cong(num1, num2);

    let product = nhan(sum, num3);

    return product;
}

let result = congNhan(2, 3, 4);

console.log(result);
