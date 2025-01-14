// 1. Hoisting
/*  
Function Declaration: Có Hoisting. Có thể gọi hàm trước khi định nghĩa.
*/

hoistedFunction();

function hoistedFunction() {
    console.log("Hello");
}

// Engine trinh duyet doc:
function hoistedFunction() {
    console.log("Hello");
}

hoistedFunction();

/* 
Function Expression: Không có hoisting. Chỉ gọi được hàm sau khi được định nghĩa.
*/
let nonHoistedFunction = function () {
    console.log("Hello");
};

nonHoistedFunction();

/* 
Arrow Function: Không có hoisting. Chỉ gọi được hàm sau khi được định nghĩa.
*/
let arrowFunction = () => {
    console.log("Hello");
};

arrowFunction();
