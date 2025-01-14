// Arrow Function
let helloArrow = () => {
    console.log("Hello");
};

// helloArrow();
setTimeout(helloArrow, 3000);

// Function Declaration
function xinChao() {
    console.log("Hello in function declaration");
}

setTimeout(xinChao, 3000);

// Function Expression
let helloExpression = function () {
    console.log("Hello in function expression");
};

setTimeout(helloExpression, 3000);

// 2. Truyền trực tiếp function vao setTimeout
// Function Declaration
setTimeout(function xinChao1() {
    console.log("Hello in function declaration.");
}, 3000);

// Function Expression
setTimeout(function () {
    console.log("Hello in function expression.");
}, 3000);

// Arrow Function
setTimeout(() => {
    console.log("Hello in arrow function.");
}, 3000);

// 3. Sử dụng setTimeout với tham số truyền vào (là tham số của hàm trong đó).
let helloArrow2 = (yourName) => {
    console.log("Hello " + yourName);
};

setTimeout(helloArrow, 3000, "Nam");

// 4. Khi muổn hủy quá trình thực hiện hàm
// Step 1: Gán setTimeout() vào 1 biến để lưu giá trị
let timeOut = setTimeout(helloArrow2, 3000, "Nam");

// Step 2: Sử dụng clearTimeout() để hủy thực hiện hàm
clearTimeout(timeOut);
